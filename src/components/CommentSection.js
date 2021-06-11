import {useState, useEffect} from 'react';
import axios from 'axios';
import { Comment } from './Comment'
import styled from 'styled-components'
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

const StyledSection = styled.section`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 1000px;
align-items: center;
`
const StyledInput = styled.textarea`
width: 70%;
height: 10%;
`

const StyledButton = styled.button`
margin:20px;
`
const StyledCommentsSection = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 50px;
`

const StyledSubSection = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
justify-content: center;
`

const IPFS = require('ipfs-mini');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const ipfsClient = require("ipfs-http-client");

export const CommentSection = () => {
    const [accounts, setAccounts] = useState([]);
    const [web3, setWeb3] = useState();
    const [provider, setProvider] = useState();
    // const [unsignedMessage, setUnsignedMessage] = useState('');
    const [signedMessage, setSignedMessage] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [comments, setComments] = useState([]);

    const loadComments = async () => {

      const response = await axios.get('https://web3.bluer.workers.dev/api/comments');
      const parsed = JSON.parse(response.data.comments);

      setComments([]);

      if (parsed) {
        for (const [index, item] of parsed.entries()) {

          const url = sanitize(item);
          const metadata = await axios.get(url);
          const bits = metadata.data;

          const newComment = (<Comment 
            key={index} 
            comment={bits.message} 
            author={bits.account} 
            date={bits.date}
            origin={bits.origin}
            cid={item}
          />)

          setComments((prev) => {
            return [...prev, newComment];
          });
          
        }
      }
    };

    const sanitize = (url) => {
      const x = url.replace('ipfs/', '').replace('ipfs://', '');
      const cidV0 = x.split('/')[0];
      const cidV1 = new ipfsClient.CID(cidV0).toV1();
      const sanitized = `https://${cidV1}.ipfs.dweb.link`;
      return sanitized;
    }

    const initialize = async () => {
        const newProvider = await detectEthereumProvider();
        setProvider(provider);
        if (newProvider) {
          const web3 = await new Web3(newProvider);
          setWeb3(web3);
          setAccounts(await web3.eth.getAccounts());
        }
      };
    
      useEffect(() => {
        initialize();
        loadComments();
      }, []);
    
    const composeEIP712CompliantMessage = () => {
      return {
        domain: {
          chainId: 1,
          name: 'localhost',
          version: '1',
        },
    
        message: { comment: inputValue },
        primaryType: 'Message',
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
          ],
          Message: [
            { name: 'comment', type: 'string' },
          ],
        },
      }
    }

    const persistToIpfs = async (message, account, unsignedMessage) => {

      const comment = `{"message":"${message}","account":"${account}","date":"${new Date().getTime()}","origin":${JSON.stringify(unsignedMessage)}}`;
      const cid = await ipfs.add(comment);
      const result = await axios.post('https://web3.bluer.workers.dev/api/comment/add', {
          cid
        })
      loadComments();
      return cid;
    }

    const SignMessage = async (account) => {
        const message = composeEIP712CompliantMessage();
        const from = account;
        const params = [from, JSON.stringify(message)];
        const method = "eth_signTypedData_v4";
    
        web3.currentProvider.sendAsync(
          {
            method,
            params,
            from,
          },
          function (err, result) {
            const { result: signature } = result;
            if (err) return console.dir(err);
            if (result.error) {
              alert(result.error.message);
            }
            if (result.error) return console.error("ERROR", result);
            setSignedMessage(signature);
            persistToIpfs(signature, from, message);
          }
        );
      };

    return (

        <>
        <StyledSection>
        <StyledCommentsSection>
          { comments.length > 0 ? comments : (<div>Be the first to comment...</div>) }
        </StyledCommentsSection>
        <StyledSubSection>
       <StyledInput className="input is-primary" type="text" placeholder="your comment..." onChange={e => {setInputValue(e.target.value)}}/>
       <StyledButton className="button is-primary" onClick={()=> SignMessage(accounts[0])}>Submit</StyledButton>
        </StyledSubSection>
        </StyledSection>
        </>
    )
}