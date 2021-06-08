import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';

import Auth from "./Auth";

function App() {
  const [example, setExample] = useState();

  const load = async () => {
    const provider = await detectEthereumProvider();
    const web3 = new Web3(provider);

    const accounts = await web3.eth.getAccounts();

    setExample(<Auth web3={web3} account={accounts[0]} />)
  } 

  useEffect(() => {
    load()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { example ? example : <div>Loading...</div>}
      </header>
    </div>
  );
}

export default App;
