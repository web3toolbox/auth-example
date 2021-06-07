import logo from './logo.svg';
import './App.css';
import {
  normalize as normalizeAddress,
  signTypedData,
  signTypedData_v4,
  signTypedDataLegacy,
} from 'eth-sig-util';

function App() {

  const signMe = () => {
    console.log(JSON.stringify(signTypedData_v4))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => {signMe()}}>sign me</button>
        </p>
      </header>
    </div>
  );
}

export default App;
