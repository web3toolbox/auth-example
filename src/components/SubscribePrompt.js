import { useState } from "react";
import {SubscriptionOptionsModal} from './SubscriptionOptionsModal' 
import styled from 'styled-components'

export const SubscribePrompt = () => {
  const [subscriptionOptionsModal, setSubcriptionsOptionsModal] =
    useState(false);
    const StyledWarning = styled.div`
    border-radius: 30px;
    background-color: #00d1b2;
    width: 100%;
    margin-bottom: 10px;
    padding: 20px;
    color: white;
    `
  return (
    <>
        <StyledWarning>
            As a free subscriber you only have access to one free article per day.
        </StyledWarning>
      <button
        className="button is-warning"
        onClick={() => setSubcriptionsOptionsModal(true)}
      >
        Subscribe for access to more content
      </button>
      <SubscriptionOptionsModal
        subscriptionOptionsModal={subscriptionOptionsModal}
        setSubcriptionsOptionsModal={setSubcriptionsOptionsModal}
      />
    </>
  );
};
