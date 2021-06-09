import './App.css';
// import { Modal, ModalCard, ModalCardBody } from 'react-bulma-components'
import { useState, useEffect, useMemo } from "react";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import Auth from "./Auth";

import Navigation from './components/Navigation'
import Content  from './components/Content';
import { LoginModal } from './components/LoginModal'
 
function App() {
  const [accounts, setAccounts] = useState([])
  const [web3, setWeb3] = useState();
  const [signature, setSignature] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const isMetaMaskConnected = accounts && Boolean(accounts.length > 0);

  const loginFlow = () => {
    
  }

  const requestAccounts = async () => {
    const newAccounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    })
    setAccounts(newAccounts)
  }

  const initialize = async () => {
    const provider = await detectEthereumProvider();
    const web3 = await new Web3(provider)
    setWeb3(web3);

    setAccounts(await web3.eth.getAccounts());
  } 

  useEffect(() => {
    initialize()
  }, []);

  return (
    <div className="App">
        <Navigation openLoginModal={setLoginModalOpen}/>
        <LoginModal open={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
        {/* { 
            isMetaMaskConnected ?
              <Auth web3={web3} requestAccounts={requestAccounts} account={accounts[0]} setSignature={setSignature} /> 
              : <button onClick={() => {requestAccounts()}}> Connect to MetaMask </button>
        } */}

        <Content signature={signature} />

    </div>
  );
}

export default App;
