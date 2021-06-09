import MetaMaskAuth from '../Auth';

export const LoginModal = ({open, setLoginModalOpen, setMMSignature}) => {
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
          // // Refer to PrimaryType
          Message: [
            { name: 'contents', type: 'string' },
          ],
        },
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
                <MetaMaskAuth authRequest={metamaskAuthRequest} setSignature={setMMSignature} setLoginModalOpen={setLoginModalOpen}/>
                </div>
              
            </section>
            <footer className="modal-card-foot">
            </footer>
          </div>
        </div>  
    )
}