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
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [subcriptionModalOpen, setSubcriptionModalOpen] = useState(false);
  const [subscriptionExpiration, setSubscriptionExpiration] = useState(null);
  const header = (<>
    <Navigation 
        openLoginModal={setLoginModalOpen} 
        openSubscriptionModal={setSubcriptionModalOpen} 
        subscriptionExpiration={subscriptionExpiration} 
      />
      <SubscriptionModal open={subcriptionModalOpen} setSubcriptionModalOpen={setSubcriptionModalOpen} />
      <LoginModal open={loginModalOpen} setLoginModalOpen={setLoginModalOpen} setSubscriptionExpiration={setSubscriptionExpiration}/>
    </>);

  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          {header}
          <Content subscriptionExpiration={subscriptionExpiration} />
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
