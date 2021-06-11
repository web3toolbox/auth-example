import { useState } from "react";
import {SubscriptionOptionsModal} from './SubscriptionOptionsModal' 
import styled from 'styled-components'

export const SubscribePrompt = ({authStatus}) => {
  const [subscriptionOptionsModal, setSubcriptionsOptionsModal] =
    useState(false);

    const StyledSection = styled.section`
    background-color: #FF9349;
    width: 100%;
    margin-bottom: 50px;
    margin-top: 30px;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `

    const StyledButton = styled.button`
    background-color: white;
    padding: 20px;
    color: #FF9349;
    margin-right: 30px;
    `
    const StyledImg = styled.img`
      height: 30px;
      width: 30px;
      transform: scaleX(-1);
    `
  return (
    <>
    <StyledSection>
      {authStatus !== 'subscribed' ? 
      <StyledButton
      className="button"
      onClick={() => setSubcriptionsOptionsModal(true)}
      >
        Subscribe
      </StyledButton>
      : null
      }
      <div style={{color: 'white', fontFamily:'Poppins', marginRight: '20px'}}>{authStatus !== 'subscribed' ? 'For unlimited access, subscribe with MetaMask' : "horray you're subscribed!"}</div>
      <StyledImg src="https://cdn.freebiesupply.com/logos/large/2x/metamask-logo-svg-vector.svg" />
        </StyledSection>
      <SubscriptionOptionsModal
        subscriptionOptionsModal={subscriptionOptionsModal}
        setSubcriptionsOptionsModal={setSubcriptionsOptionsModal}
      />
    </>
  );
};
