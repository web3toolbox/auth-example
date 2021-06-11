import { useState, useEffect } from 'react';
import article from "../assets/article.png";
import axios from 'axios';
import SubscriptionModal from '../components/SubscriptionModal'
import { SubscribePrompt } from '../components/SubscribePrompt'
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';


const Content = ({ signature }) => {
  const [paywalledContent, setPaywalledContent] = useState('Login to view full article...')
  const [subscribeModal, setSubscribeModal] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);
  const [currentAuthStatus, setCurrentAuthStatus] = useState("none")

  useEffect(async () => {
    if (signature) {

      try {
        const response = await axios.post('https://web3.bluer.workers.dev/api/trends', {
          account: "temp",
          signature: "temp"
        })

        setPaywalledContent(response.data.content);
        setCurrentAuthStatus("subscribed");
      } catch (err) {
        setCurrentAuthStatus("free");
      }
    }
  }, [signature])

  const toggleSubscribeModal = () => {
    if (subscribeModal) {
        setSubscribeModal(false)
    } else {
        setSubscribeModal(true)
    }
  }
  
  // const subscribe = async (amount)  => {
  //   try {
  //       const provider = await detectEthereumProvider();
  //       const web3 = await new Web3(provider)
  //       const accounts = await web3.eth.getAccounts();
  //       const result = await web3.eth.sendTransaction({ 
  //           from: accounts[0], 
  //           to: "0x15eA52861Bc87bEAfc7684a0B76BCEa55CB973Fd", 
  //           value: web3.utils.toWei(amount, "ether")
  //       });

  //       setSubscribeModal(false);
  //       setWelcomeModal(true);

  //   } catch (err) {
  //       setSubscribeModal(false);
  //   }
  // }

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
          </div>
        </div>

        <section className="section">
          <div class="columns">
            <div class="column is-three-fifths">
              <div className="content is-medium">
                <figure className="image is-16by9">
                  <img src={article} alt="" />
                </figure>
                <h2 className="subtitle is-4">June 8, 2021</h2>
                <h1 className="title">Lorem Ipsum</h1>
                <p>{paywalledContent}</p>
              </div>
            </div>
            <div class="column is-two-fifths">
              <div className="content is-medium">
                <figure className="image is-16by9">
                  <img src={article} alt="" />
                </figure>
                <h2 className="subtitle is-4">June 8, 2021</h2>
                <h1 className="title">Lorem Ipsum</h1>
                <p>{paywalledContent}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="columns">
            <div className="column is-8 is-offset-2">

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