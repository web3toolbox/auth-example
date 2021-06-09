import { useState } from "react";

import styled from 'styled-components';
import { 
    CashOutline, 
    NewspaperOutline 
} from 'react-ionicons';

const StyledButton = styled.button`
  background-color: #DC832E;
  border: solid 0.1rem #e0e0e0;
  border-radius: 0.4rem;
  padding: 0.4rem 1rem;
  color: #fff;
  font-weight: bold;
`;

function Auth({ web3, account, setSignature }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [subscribeModal, setSubscribeModal] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);
    
  const Login = () => {
    
    if (isAuthenticated) {
        toggleSubscribeModal();
        return;
    }

    const msgParams = JSON.stringify({
      domain: {
        chainId: 1337,
        name: 'Leaping Lubins',
        // verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        version: '1',
      },
  
      message: { contents: 'Login to Leaping Lubins'},
      primaryType: 'Message',
      types: {
        EIP712Domain: [
          { name: 'name', type: 'string' },
          { name: 'version', type: 'string' },
          { name: 'chainId', type: 'uint256' },
          // { name: 'verifyingContract', type: 'address' },
        ],
        // // Refer to PrimaryType
        Message: [
          { name: 'contents', type: 'string' },
        ],
      },
    });
    const from = account;
    const params = [from, msgParams];
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
        }
        if (result.error) return console.error('ERROR', result);
        setSignature(signature);
        setIsAuthenticated(true);
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
    <>
        <StyledButton onClick={() => {Login()}}>{ isAuthenticated ? `View Account` : `Login with Metamask` }</StyledButton>

        <div className={`modal ${ subscribeModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
                <div className="modal-content">
                <header className="modal-card-head">
                <p className="modal-card-title">Subscribe to Leaping Lubins</p>
                <button className="delete" aria-label="close" onClick={()=>toggleSubscribeModal()}></button>
                </header>
                <section className="modal-card-body">
                    <section className="section pt-1 pb-1">
                        <div className="columns">
                            <div className="column is-10">
                                <div className="content is-medium has-text-left">
                                    <p className="is-size-4 mb-0"><NewspaperOutline color="silver" /> Subscribe for 1 month <small className="is-size-6">0.1 ETH</small></p>
                                    <p className="is-size-7">Discover the hottest decentralized trends for a month.</p>
                                    <button className="button is-warning" onClick={ () => { subscribe("0.1") }}>Pay with Metamask</button>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10">
                                <div className="content is-medium has-text-left">
                                    <p className="is-size-4 mb-0"><NewspaperOutline color="gold" /> Subscribe for 12 months <small className="is-size-6">1 ETH</small></p>
                                    <p className="is-size-7">Discover the hottest decentralized trends for an entire year.</p>
                                    <button className="button is-warning" onClick={ () => { subscribe("1") }}>Pay with Metamask</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <footer className="modal-card-foot">
                </footer>
            </div>
        </div>

        <div className={`modal ${ welcomeModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
                <div className="modal-content">
                <header className="modal-card-head">
                <p className="modal-card-title">Welcome to Leaping Lubins, friend!</p>
                <button className="delete" aria-label="close" onClick={()=>toggleWelcomeModal()}></button>
                </header>
                <section className="modal-card-body">
                    <section className="section pt-1 pb-1">
                        <div className="columns">
                            <div className="column is-10">
                                <div className="content is-medium has-text-left">
                                    <p className="is-size-4 mb-0">Welcome aboard</p>
                                    <p className="is-size-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <footer className="modal-card-foot">
                </footer>
            </div>
        </div>
    </>

    

  );
}

export default Auth;
