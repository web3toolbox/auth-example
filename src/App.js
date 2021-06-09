import './App.css';
// import { Modal, ModalCard, ModalCardBody } from 'react-bulma-components'
import { useState, useEffect, useMemo } from "react";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import Auth from "./Auth";

import Navigation from './components/Navigation'
import Content  from './components/Content';

import {
  Switch,
  Route,
} from "react-router-dom";
 
function App() {
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
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <Navigation />
          { 
              isMetaMaskConnected ?
                <Auth web3={web3} requestAccounts={requestAccounts} account={accounts[0]} setSignature={setSignature} /> 
                : <button onClick={() => {requestAccounts()}}> Connect to MetaMask </button>
          }
          <Content signature={signature} />
          </div>
      </Route>
      <Route path="/trends">
        <div className="App">
          <Navigation />
          trends
        </div>
      </Route>
      <Route path="/charts">
        <div className="App">
          <Navigation />
          charts
        </div>
      </Route>
      <Route path="/events">
        <div className="App">
          <Navigation />
          events
        </div>
      </Route>
      <Route>
        <div className="App">
          doh
        </div>
      </Route>
    </Switch>        
      );
    }

export default App;
