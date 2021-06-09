
export const LoginModal = ({open, setLoginModalOpen}) => {
    const active = open ? "is-active" : "";
    const googleLogo = 'google.png'
    const facebookLogo = 'facebook.png'
    const metamaskLogo = 'metamask.svg'
    const imgStyle = {
        paddingRight: '3px'
    }
    const buttonStyle = {
        width: '225px'
    }
    return (
        <div className={`modal ${active}`}>
          <div className="modal-background" />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Login</p>
              <button
                onClick={() => setLoginModalOpen(false)}
                className="delete"å
                aria-label="close"
              />
            </header>
            <section className="modal-card-body">
                <div className="buttons">
               <button className="button" style={buttonStyle}>
                <img src={googleLogo} width="20" height="20" style={imgStyle}/>
                Login with Google
                </button> 
                <button className="button" style={buttonStyle}>
                <img src={facebookLogo} width="20" height="20" style={imgStyle}/>
                Login with Facebook
                </button> 
                <button className="button" style={buttonStyle}>
                <img src={metamaskLogo} width="20" height="20" style={imgStyle}/>
                Login with Metamask
                </button> 
                </div>
              
            </section>
            <footer className="modal-card-foot">
            </footer>
          </div>
        </div>  
    )
}