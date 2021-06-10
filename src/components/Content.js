import { useState, useEffect } from 'react';
import article from "../assets/article.png";
import axios from 'axios';
import SubscriptionModal from './SubscriptionModal'
import { SubscribePrompt } from './SubscribePrompt'
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';


const Content = ({ signature }) => {
  const [paywalledContent, setPaywalledContent] = useState('Login to view full article...')
  const [subscribeModal, setSubscribeModal] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);
  const [currentAuthStatus, setCurrentAuthStatus] = useState("none")

  useEffect(() => {
    if (signature) {
      axios.get(`https://auth-functions.netlify.app/.netlify/functions/auth?user=${signature}`)
      .then(function (response) {
        setPaywalledContent('moaaaaar');
        setCurrentAuthStatus("subscribed")
      })
      .catch(function (error) {
        console.log(error);
        // TODO establish what the expected response should be if the user is not subscribed
        setCurrentAuthStatus("free")
      })
    }
  }, [signature])

  const toggleSubscribeModal = () => {
    if (subscribeModal) {
        setSubscribeModal(false)
    } else {
        setSubscribeModal(true)
    }
  }
  
  const subscribe = async (amount)  => {
    try {
        const provider = await detectEthereumProvider();
        const web3 = await new Web3(provider)
        const accounts = await web3.eth.getAccounts();
        const result = await web3.eth.sendTransaction({ 
            from: accounts[0], 
            to: "0x15eA52861Bc87bEAfc7684a0B76BCEa55CB973Fd", 
            value: web3.utils.toWei(amount, "ether")
        });

        setSubscribeModal(false);
        setWelcomeModal(true);

    } catch (err) {
        setSubscribeModal(false);
    }
  }

  const toggleWelcomeModal = () => {
    if (welcomeModal) {
        setWelcomeModal(false)
    } else {
        setWelcomeModal(true)
    }
  }

  const renderContentByAuthStatus = () => {
    switch(currentAuthStatus){
      case "none" : return null;
      break;
      case "free": return <SubscribePrompt />
      break;
      case "subscribed": return <div>horray you're subscribed</div>
      break;
      default: return null;
      break;
    }
  }

  const lorem = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`
  return (
    <>
    {/* <SubscriptionModal subscribe={subscribe} subscribeModal={subscribeModal} toggleSubscribeModal={toggleSubscribeModal} /> */}
    <section className="hero ">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-4 is-offset-4">
            <div style={{margin: '10px'}}>
            {renderContentByAuthStatus()}
            </div>
            <figure className="image is-16by9">
              <img src={article} alt="" />
            </figure>
          </div>
        </div>

        <section className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div className="content is-medium">
                <h2 className="subtitle is-4">June 8, 2021</h2>
                <h1 className="title">Lorem Ipsum</h1>
                <p>{lorem}</p>
                <p>{paywalledContent}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
  </>
  );
};

export default Content;