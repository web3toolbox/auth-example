import MetaMaskAuth from './MetaMaskAuth';
// import { MetaMaskAuth } from 'web3-toolkit'
import styled from 'styled-components';

export const LoginModal = ({open, setLoginModalOpen, setSubscriptionExpiration}) => {
    const active = open ? "is-active" : "";
    const googleLogo = 'google.png'
    const facebookLogo = 'facebook.png'
    const metamaskLogo = 'metamask.svg'

    const StyledModalCard = styled.div`
        width: 450px;
    `
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
            margin-right: 10px
        }
    `
    const StyledSection = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 370px;
        align-items: center;
    `

    const metamaskAuthRequest = {
        domain: {
          chainId: 1,
          name: 'localhost2',
          // verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
          version: '1',
        },
    
        message: { contents: 'Login to Leaping Lubins'},
        primaryType: 'Message',
        types: {
          EIP712Domain: [
            { name: 'name', type: 'string' },
            { name: 'version', type: 'string' },
            { name: 'chainId', type: 'uint256' },
            // { name: 'verifyingContract', type: 'address' },
          ],
          Message: [
            { name: 'contents', type: 'string' },
          ],
        },
      }


    return (
        <div className={`modal ${active}`}>
          <div className="modal-background" />
          <StyledModalCard className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Login</p>
              <button
                onClick={() => setLoginModalOpen(false)}
                className="delete"
                aria-label="close"
              />
            </header>
            <StyledSection className="modal-card-body">
               <StyledButton className="button">
                <img src={googleLogo} />
                Login with Google
                </StyledButton> 
                <StyledButton className="button">
                <img src={facebookLogo}/>
                Login with Facebook
                </StyledButton> 
                <MetaMaskAuth authRequest={metamaskAuthRequest} setSubscriptionExpiration={setSubscriptionExpiration} setLoginModalOpen={setLoginModalOpen}/>
            </StyledSection>
            <footer className="modal-card-foot">
            </footer>
          </StyledModalCard>
        </div>  
    )
}