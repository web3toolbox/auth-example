import logo from './logo.svg';
import './App.css';

import { useState, useEffect, useMemo } from "react";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import Auth from "./Auth";

function App() {
  const [example, setExample] = useState();
  const [accounts, setAccounts] = useState([])
  const [web3, setWeb3] = useState();
  const [signature, setSignature] = useState('');
  const isMetaMaskConnected = accounts && Boolean(accounts.length > 0);

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { signature ?
         <div>Authed!</div> 
         : isMetaMaskConnected ?
        <Auth web3={web3} requestAccounts={requestAccounts} account={accounts[0]} setSignature={setSignature} /> 
        : <button onClick={() => {requestAccounts()}}> Connect to MetaMask </button>}
      </header>
    </div>
  );
}

export default App;
