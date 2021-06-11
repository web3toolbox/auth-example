import { useState, useEffect } from 'react';
import article from "../assets/article.png";
import axios from 'axios';
import {HeadlineStory} from '../content/HeadlineStory'
import { SubscribePrompt } from '../components/SubscribePrompt'
import {OtherStories} from '../content/OtherStories'
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';


const Content = ({ subscriptionExpiration }) => {
  const [subscribeModal, setSubscribeModal] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);
  // const [currentAuthStatus, setCurrentAuthStatus] = useState("none")

  // useEffect(async () => {
  //   if (signature) {

  //     try {
  //       const response = await axios.post('https://web3.bluer.workers.dev/api/trends', {
  //         account: "temp",
  //         signature: "temp"
  //       })

  //       setCurrentAuthStatus("subscribed");
  //     } catch (err) {
  //       setCurrentAuthStatus("free");
  //     }
  //   }
  // }, [signature])

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


  return (
    <>
    {/* <SubscriptionModal subscribe={subscribe} subscribeModal={subscribeModal} toggleSubscribeModal={toggleSubscribeModal} /> */}
    <section className="hero ">
    <div className="hero-body">
      <div className="container">
        <HeadlineStory subscriptionExpiration={subscriptionExpiration} />
        <SubscribePrompt subscriptionExpiration={subscriptionExpiration} />
        <OtherStories />
      </div>
    </div>
  </section>
  </>
  );
};

export default Content;