import { useState, useEffect } from "react";
import styled from 'styled-components';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import ConnectionWalkThroughModal from './components/ConnectionWalkThrough'
import { 
    CashOutline, 
    NewspaperOutline 
} from 'react-ionicons';

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

  // const toggleSubscribeModal = () => {
  //   if (subscribeModal) {
  //       setSubscribeModal(false)
  //   } else {
  //       setSubscribeModal(true)
  //   }
  // }
  
  // const subscribe = async (amount)  => {
  //   try {
  //       const accounts = await web3.eth.getAccounts();
  //       const result = await web3.eth.sendTransaction({ 
  //           from: accounts[0], 
  //           to: "0x15eA52861Bc87bEAfc7684a0B76BCEa55CB973Fd", 
  //           value: web3.utils.toWei(amount, "ether")
  //       });

  //       setSubscribeModal(false);
  //       setWelcomeModal(true);

  //   } catch (err) {
  //       setSubscribeModal(false);
  //   }
  // }

  // const toggleWelcomeModal = () => {
  //   if (welcomeModal) {
  //       setWelcomeModal(false)
  //   } else {
  //       setWelcomeModal(true)
  //   }
  // }

  return (
    // <StyledButton onClick={() => {Login()}}>{ isAuthenticated ? `View Account` : `Login with Metamask` }</StyledButton>
    // NEED TO SETUP INSTALL METAMASK FLOW AS WELL
    <> 
    <ConnectionWalkThroughModal open={walkThroughModalOpen} setWalkThroughModalOpen={setWalkThroughModalOpen} connected={Boolean(accounts.length)} />
    <StyledButton className="button" onClick={() => accounts.length ? Login(accounts[0]) : Connect()} >
    <img src={metamaskLogo} width="20" height="20"/>
    Login with Metamask
    </StyledButton> 
    </>
    // <>
    //     <StyledButton onClick={() => {Login()}}>{ isAuthenticated ? `View Account` : `Login with Metamask` }</StyledButton>

    //     <div className={`modal ${ subscribeModal ? 'is-active' : ''}`}>
    //         <div className="modal-background"></div>
    //             <div className="modal-content">
    //             <header className="modal-card-head">
    //             <p className="modal-card-title">Subscribe to Leaping Lubins</p>
    //             <button className="delete" aria-label="close" onClick={()=>toggleSubscribeModal()}></button>
    //             </header>
    //             <section className="modal-card-body">
    //                 <section className="section pt-1 pb-1">
    //                     <div className="columns">
    //                         <div className="column is-10">
    //                             <div className="content is-medium has-text-left">
    //                                 <p className="is-size-4 mb-0"><NewspaperOutline color="silver" /> Subscribe for 1 month <small className="is-size-6">0.1 ETH</small></p>
    //                                 <p className="is-size-7">Discover the hottest decentralized trends for a month.</p>
    //                                 <button className="button is-warning" onClick={ () => { subscribe("0.1") }}>Pay with Metamask</button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <div className="columns">
    //                         <div className="column is-10">
    //                             <div className="content is-medium has-text-left">
    //                                 <p className="is-size-4 mb-0"><NewspaperOutline color="gold" /> Subscribe for 12 months <small className="is-size-6">1 ETH</small></p>
    //                                 <p className="is-size-7">Discover the hottest decentralized trends for an entire year.</p>
    //                                 <button className="button is-warning" onClick={ () => { subscribe("1") }}>Pay with Metamask</button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </section>
    //             </section>
    //             <footer className="modal-card-foot">
    //             </footer>
    //         </div>
    //     </div>

    //     <div className={`modal ${ welcomeModal ? 'is-active' : ''}`}>
    //         <div className="modal-background"></div>
    //             <div className="modal-content">
    //             <header className="modal-card-head">
    //             <p className="modal-card-title">Welcome to Leaping Lubins, friend!</p>
    //             <button className="delete" aria-label="close" onClick={()=>toggleWelcomeModal()}></button>
    //             </header>
    //             <section className="modal-card-body">
    //                 <section className="section pt-1 pb-1">
    //                     <div className="columns">
    //                         <div className="column is-10">
    //                             <div className="content is-medium has-text-left">
    //                                 <p className="is-size-4 mb-0">Welcome aboard</p>
    //                                 <p className="is-size-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </section>
    //             </section>
    //             <footer className="modal-card-foot">
    //             </footer>
    //         </div>
    //     </div>
    // </>
  );
}

export default MetaMaskAuth;
