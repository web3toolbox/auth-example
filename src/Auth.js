import { useState, useEffect } from "react";
import styled from 'styled-components';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import ConnectionWalkThroughModal from './components/ConnectionWalkThrough'
import SubscriptionModal from './components/SubscriptionModal'
import WelcomeModal from './components/WelcomeModal'
const StyledButton = styled.button`
  width: 225px;
  img {
    paddingRight: 3px;
  }
`;
function MetaMaskAuth({ web3Provider, account, setSignature, authRequest, setLoginModalOpen }) {
  const [accounts, setAccounts] = useState([])
  const [web3, setWeb3] = useState();
  const [walkThroughModalOpen, setWalkThroughModalOpen] = useState(false);
  const [subscribeModal, setSubscribeModal] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);

  const initialize = async () => {
    const provider = await detectEthereumProvider();
    const web3 = await new Web3(provider)
    setWeb3(web3);
    setAccounts(await web3.eth.getAccounts());
  } 

  useEffect(() => {
    initialize()
  }, []);

  const metamaskLogo = 'metamask.svg'
  const Connect = async () => {

    setWalkThroughModalOpen(true)
    requestAccounts()
    .then((newAccounts) => {
      if(newAccounts.length){
        Login(newAccounts[0]);
      }
    })
  }

  const requestAccounts = async () => {
    const newAccounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    setAccounts(newAccounts)
    return Promise.resolve(newAccounts);
  }

  const closeModals = () => {
    setWalkThroughModalOpen(false);
    setLoginModalOpen(false)
  }

  const Login = (account) => {
    const from = account;
    const params = [from, JSON.stringify(authRequest)];
    const method = 'eth_signTypedData_v4';

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
          closeModals()
        }
        if (result.error) return console.error('ERROR', result);
        setSignature(signature);
        closeModals();
      }
    );
  }

  const toggleSubscribeModal = () => {
    if (subscribeModal) {
        setSubscribeModal(false)
    } else {
        setSubscribeModal(true)
    }
  }
  
  const subscribe = async (amount)  => {
    try {
        const accounts = await web3.eth.getAccounts();
        const result = await web3.eth.sendTransaction({ 
            from: accounts[0], 
            to: "0x15eA52861Bc87bEAfc7684a0B76BCEa55CB973Fd", 
            value: web3.utils.toWei(amount, "ether")
        });

        setSubscribeModal(false);
        setWelcomeModal(true);

    } catch (err) {
        setSubscribeModal(false);
    }
  }

  const toggleWelcomeModal = () => {
    if (welcomeModal) {
        setWelcomeModal(false)
    } else {
        setWelcomeModal(true)
    }
  }

  return (
    // <StyledButton onClick={() => {Login()}}>{ isAuthenticated ? `View Account` : `Login with Metamask` }</StyledButton>
    // NEED TO SETUP INSTALL METAMASK FLOW AS WELL
    <> 
    <ConnectionWalkThroughModal open={walkThroughModalOpen} setWalkThroughModalOpen={setWalkThroughModalOpen} connected={Boolean(accounts.length)} />
    <StyledButton className="button" onClick={() => accounts.length ? Login(accounts[0]) : Connect()} >
    <img src={metamaskLogo} width="20" height="20"/>
    Login with Metamask
    </StyledButton>
    {/*TODO MAKE THIS A SEPARATE SIGNUP FLOW */}
    <StyledButton className="button" onClick={() => accounts.length ? toggleSubscribeModal() : null} >
    <img src={metamaskLogo} width="20" height="20"/>
    Subscribe with Metamask
    </StyledButton> 
    <SubscriptionModal subscribe={subscribe} subscribeModal={subscribeModal} toggleSubscribeModal={toggleSubscribeModal} />
    <WelcomeModal welcomeModal={welcomeModal} />
    </>
  );
}

export default MetaMaskAuth;
