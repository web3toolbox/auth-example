import styled, { keyframes } from 'styled-components'

const ConnectionWalkThroughModal = ({open, setWalkThroughModalOpen, connected}) =>  {
    const active = open ? "is-active" : "";
    return (
        <div className={`modal ${active} connection-walk-through`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Setup MetaMask</p>
              <button
                onClick={() => setWalkThroughModalOpen(false)}
                className="delete"
                aria-label="close"
              />
            </header>
            <section className="modal-card-body" style={{display: 'flex', flexDirection: 'row', justifyContent:"space-around"}}>
            <div className={`box ${!connected ? "current-stage" : ''}`}>
                Connect to MetaMask
            </div>
            <img src='right-arrow.png' style={{width: '80px', height: '70%'}} />
            <div className="box" className={`box ${connected ? "current-stage" : ''}`}>
                Login with MetaMask
            </div>
            </section>
          </div>
        </div>  
    )
}

export default ConnectionWalkThroughModal;