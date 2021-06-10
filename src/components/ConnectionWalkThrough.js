import styled, { keyframes } from 'styled-components'

const ConnectionWalkThroughModal = ({open, setWalkThroughModalOpen, connected}) =>  {
    const active = open ? "is-active" : "";
    
    const StyledModalCard = styled.div`
    width: 400px;
    height: 340px;
    `
    const StyledSection = styled.section`
        display: flex;
        flex-direction: column;
        height: 400px;
        align-content: left;
        padding: 20px;
    `
    const Circle = styled.div`
    border-radius: 100px;
    color: #037DD6;
    height: 27px;
    width: 27px;
    border: 1px solid #037DD6;
    align-self:flex-start;
    flex-shrink: 0;
    `
    return (
        <div className={`modal ${active} connection-walk-through`}>
          <div className="modal-background" />
          <StyledModalCard className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Sign in with MetaMask</p>   
              <button
                onClick={() => setWalkThroughModalOpen(false)}
                className="delete"
                aria-label="close"
              />
            </header>
            <StyledSection className="modal-card-body">
            <span>Complete the two-step sign in process by approving the following MetaMask confirmations.</span>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
            { !connected ? <Circle>1</Circle> : <Circle>✓</Circle> }
            <p style={{textAlign:'left', marginLeft:'10px'}}><b>Connect with MetaMask</b><br />Connect your Metamask accounts to use with this site.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
            {!connected ? <Circle style={{color: 'grey', border: '1px solid grey'}}>2</Circle> : <Circle>2</Circle>}
            <p style={{textAlign:'left', marginLeft:'10px'}}><b>Signature request</b><br />Sign-in by signing the request.</p>
            </div>
            </StyledSection>
          </StyledModalCard>
        </div>  
    )
}

export default ConnectionWalkThroughModal;