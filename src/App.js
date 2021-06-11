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
  const [subcriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  const [subscriptionExpiration, setSubscriptionExpiration] = useState(null);
  const header = (<>
    <Navigation 
        openLoginModal={setLoginModalOpen} 
        openSubscriptionModal={setSubscriptionModalOpen} 
        subscriptionExpiration={subscriptionExpiration} 
      />
      <SubscriptionModal open={subcriptionModalOpen} setSubscriptionModalOpen={setSubscriptionModalOpen} />
      <LoginModal open={loginModalOpen} setLoginModalOpen={setLoginModalOpen} setSubscriptionExpiration={setSubscriptionExpiration} setLoginModalOpen={setLoginModalOpen} loginModalOpen={loginModalOpen}/>
    </>);

  return (
    <Switch>
      <Route path="/" exact>
        <div className="App">
          {header}
          <Content subscriptionExpiration={subscriptionExpiration} setSubscriptionExpiration={setSubscriptionExpiration} setLoginModalOpen={setLoginModalOpen}/>
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
          <h2 className="title">Comments</h2>
          <p>Leave your verified thoughts...</p>
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
