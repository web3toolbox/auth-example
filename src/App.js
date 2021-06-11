import './App.css';
import { useState } from "react";
import Navigation from './components/Navigation'
import Content from './content/Content';
import Trends from './content/Trends';
import { LoginModal } from './components/LoginModal';
import { SubscriptionModal } from './components/SubscriptionModal';
import { CommentSection } from './components/CommentSection';
import {
  Switch,
  Route,
} from "react-router-dom";
 
function App() {
  const [mmSignature, setMMSignature] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [subcriptionModalOpen, setSubcriptionModalOpen] = useState(false);

  const header = (<>
    <Navigation 
        openLoginModal={setLoginModalOpen} 
        openSubscriptionModal={setSubcriptionModalOpen} 
        mmSignature={mmSignature} 
      />
      <SubscriptionModal open={subcriptionModalOpen} setSubcriptionModalOpen={setSubcriptionModalOpen} />
      <LoginModal open={loginModalOpen} setLoginModalOpen={setLoginModalOpen} setMMSignature={setMMSignature}/>
    </>);

  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          {header}
          <Content signature={mmSignature} />
        </div>
      </Route>
      <Route path="/trends">
        <div className="App">
          {header}
          <Trends />
        </div>
      </Route>
      <Route path="/charts">
        <div className="App">
          {header}
          charts
        </div>
      </Route>
      <Route path="/comments">
        <div className="App">
          {header}
          comments
          <CommentSection />
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
