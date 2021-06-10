import styled from 'styled-components';

export const SubscriptionOptionsModal = ({subscriptionOptionsModal, setSubcriptionsOptionsModal}) => {
    const active = subscriptionOptionsModal ? "is-active" : "";
    const paypalLogo = 'https://logos-world.net/wp-content/uploads/2020/04/PayPal-Symbol.png'
    const metamaskLogo = "https://cdn.worldvectorlogo.com/logos/metamask.svg"

    const StyledModalCard = styled.div`
        width: 450px;
        height: 400px;
    `
    const StyledButton = styled.button`
        border-radius: 30px;
        font-size: 20px;
        width: 300px; 
        height: 60px;
        display: flex;
        justify-content: flex-start;
        img {
            width: 45px;
            height: 30px;
            margin-right: 10px;
            flex-shrink: 0;
        }
    `
    const StyledSection = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 370px;
        align-items: center;
    `

    return (
        <div className={`modal ${active}`}>
          <div className="modal-background" />
          <StyledModalCard className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Subscribe</p>
              <button
                onClick={() => setSubcriptionsOptionsModal(false)}
                className="delete"
                aria-label="close"
              />
            </header>
            <StyledSection className="modal-card-body">
               <StyledButton className="button">
                <img src={paypalLogo} />
                Pay with Paypal
                </StyledButton> 
                <StyledButton className="button">
                <img src={metamaskLogo}/>
                Pay with MetaMask
                </StyledButton> 
            </StyledSection>
            <footer className="modal-card-foot">
            </footer>
          </StyledModalCard>
        </div>  
    )
}