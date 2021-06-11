import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import ConnectionWalkThroughModal from "./ConnectionWalkThrough";
import SubscriptionModal from "./SubscriptionModal";
import WelcomeModal from "./WelcomeModal";
import DownloadMMModal from "./DownloadMMModal";

const StyledButton = styled.button`
  border-radius: 30px;
  font-size: 20px;
  width: 320px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;

function MetaMaskAuth({
  web3Provider,
  account,
  setSubscriptionExpiration,
  authRequest,
  setLoginModalOpen,
}) {
  const [accounts, setAccounts] = useState([]);
  const [web3, setWeb3] = useState();
  const [provider, setProvider] = useState();
  const [walkThroughModalOpen, setWalkThroughModalOpen] = useState(false);
  const [subscribeModal, setSubscribeModal] = useState(false);
  const [welcomeModal, setWelcomeModal] = useState(false);
  const [downloadModal, setDownloadModal] = useState(false);

  const initialize = async () => {
    const newProvider = web3Provider ?? (await detectEthereumProvider());
    setProvider(newProvider);
    if (newProvider) {
      const web3 = await new Web3(newProvider);
      setWeb3(web3);
      setAccounts(await web3.eth.getAccounts());
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const metamaskLogo = "metamask.svg";
  const Connect = async () => {
    if (provider) {
      setWalkThroughModalOpen(true);
      requestAccounts().then((newAccounts) => {
        if (newAccounts.length) {
          Login(newAccounts[0]);
        }
      });
    } else {
      toggleDownloadModal();
    }
  };

  const requestAccounts = async () => {
    const newAccounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccounts(newAccounts);
    return Promise.resolve(newAccounts);
  };

  const closeModals = () => {
    setWalkThroughModalOpen(false);
    setLoginModalOpen(false);
  };

  const Login = (account) => {
    const from = account;
    const params = [from, JSON.stringify(authRequest)];
    const method = "eth_signTypedData_v4";

    web3.currentProvider.sendAsync(
      {
        method,
        params,
        from,
      },
      async (err, result) => {
        const { result : signature, error } = result;
        if (err) return console.dir(err);
        if (error) {
          alert(error.message);
          closeModals();
        }
        if (error) return console.error("ERROR", result);
        try {
          await axios.post(
            "https://web3.bluer.workers.dev/auth/register",
            {
              account,
              signature,
            }
          );
          const subscriptionResult = await axios.post(
            "https://web3.bluer.workers.dev/auth/subscription",
            {
              account,
            }
          );
          const {
            data: { expiration },
          } = subscriptionResult;
          setSubscriptionExpiration(expiration || 1);
        } catch (err) {
          console.log("error", JSON.stringify(err));
          setSubscriptionExpiration(1);
        }
        closeModals();
      }
    );
  };

  const toggleSubscribeModal = () => {
    if (subscribeModal) {
      setSubscribeModal(false);
    } else {
      setSubscribeModal(true);
    }
  };

  const toggleDownloadModal = () => {
    if (downloadModal) {
      setDownloadModal(false);
    } else {
      setDownloadModal(true);
    }
  };

  const subscribe = async (amount) => {
    try {
      const accounts = await web3.eth.getAccounts();
      const result = await web3.eth.sendTransaction({
        from: accounts[0],
        to: "0x15eA52861Bc87bEAfc7684a0B76BCEa55CB973Fd",
        value: web3.utils.toWei(amount, "ether"),
      });

      setSubscribeModal(false);
      setWelcomeModal(true);
    } catch (err) {
      setSubscribeModal(false);
    }
  };

  const toggleWelcomeModal = () => {
    if (welcomeModal) {
      setWelcomeModal(false);
    } else {
      setWelcomeModal(true);
    }
  };

  return (
    // <StyledButton onClick={() => {Login()}}>{ isAuthenticated ? `View Account` : `Login with Metamask` }</StyledButton>
    // NEED TO SETUP INSTALL METAMASK FLOW AS WELL
    <>
      <ConnectionWalkThroughModal
        open={walkThroughModalOpen}
        setWalkThroughModalOpen={setWalkThroughModalOpen}
        connected={Boolean(accounts.length)}
      />
      <DownloadMMModal
        toggleDownloadModal={toggleDownloadModal}
        downloadModal={downloadModal}
      />
      <StyledButton
        className="button"
        onClick={() => (accounts.length ? Login(accounts[0]) : Connect())}
      >
        <img src={metamaskLogo} width="20" height="20" />
        Login with Metamask
      </StyledButton>
      {/*TODO MAKE THIS A SEPARATE SIGNUP FLOW */}
      {/* <StyledButton
        className="button"
        onClick={() => (accounts.length ? toggleSubscribeModal() : null)}
      >
        <img src={metamaskLogo} width="20" height="20" />
        Subscribe with Metamask
      </StyledButton>
      <SubscriptionModal
        subscribe={subscribe}
        subscribeModal={subscribeModal}
        toggleSubscribeModal={toggleSubscribeModal}
      />
      <WelcomeModal welcomeModal={welcomeModal} /> */}
    </>
  );
}

export default MetaMaskAuth;
