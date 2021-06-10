import './App.css';
import { useState } from "react";
import Navigation from './components/Navigation'
import Content  from './components/Content';
import { LoginModal } from './components/LoginModal'
import {
  Switch,
  Route,
} from "react-router-dom";
 
function App() {
  const [mmSignature, setMMSignature] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          <Navigation openLoginModal={setLoginModalOpen} mmSignature={mmSignature} />
          <LoginModal open={loginModalOpen} setLoginModalOpen={setLoginModalOpen} setMMSignature={setMMSignature}/>
          <Content signature={mmSignature} />
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
