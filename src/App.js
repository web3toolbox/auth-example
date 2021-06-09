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
  const [mmSignature, setMMSignature] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="App">
        <Navigation openLoginModal={setLoginModalOpen}/>
        <LoginModal open={loginModalOpen} setLoginModalOpen={setLoginModalOpen} setMMSignature={setMMSignature}/>
        {/* { 
            isMetaMaskConnected ?
              <Auth web3={web3} requestAccounts={requestAccounts} account={accounts[0]} setSignature={setSignature} /> 
              : <button onClick={() => {requestAccounts()}}> Connect to MetaMask </button>
        } */}

        <Content signature={mmSignature} />

    </div>
  );
}

export default App;
