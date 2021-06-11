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

    const Spinner = styled.div`
      border: 11px solid #f3f3f3; /* Light grey */
      border-top: 11px solid #3498db; /* Blue */
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin .8s linear infinite;
      flex-shrink: 0;
      margin-left: 10px;
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
            { !connected ? <Spinner /> : null }
            </div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '20px'}}>
            {!connected ? <Circle style={{color: 'grey', border: '1px solid grey'}}>2</Circle> : <Circle>2</Circle>}
            <p style={{textAlign:'left', marginLeft:'10px'}}><b>Signature request</b><br />Sign-in by signing the request.</p>
            { !connected ?  null : <Spinner /> }
            </div>
            </StyledSection>
          </StyledModalCard>
        </div>  
    )
}

export default ConnectionWalkThroughModal;