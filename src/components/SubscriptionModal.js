import { 
    NewspaperOutline 
} from 'react-ionicons';

const SubscriptionModal = ({toggleSubscribeModal, subscribeModal, subscribe}) => {
    return (
        <>
        {/* <StyledButton onClick={() => {Login()}}>{ isAuthenticated ? `View Account` : `Login with Metamask` }</StyledButton> */}
        <div className={`modal ${ subscribeModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
                <div className="modal-content">
                <header className="modal-card-head">
                <p className="modal-card-title">Subscribe to Leaping Lubins</p>
                <button className="delete" aria-label="close" onClick={()=>toggleSubscribeModal()}></button>
                </header>
                <section className="modal-card-body">
                    <section className="section pt-1 pb-1">
                        <div className="columns">
                            <div className="column is-10">
                                <div className="content is-medium has-text-left">
                                    <p className="is-size-4 mb-0"><NewspaperOutline color="silver" /> Subscribe for 1 month <small className="is-size-6">0.1 ETH</small></p>
                                    <p className="is-size-7">Discover the hottest decentralized trends for a month.</p>
                                    <button className="button is-warning" onClick={ () => { subscribe("0.1") }}>Pay with Metamask</button>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10">
                                <div className="content is-medium has-text-left">
                                    <p className="is-size-4 mb-0"><NewspaperOutline color="gold" /> Subscribe for 12 months <small className="is-size-6">1 ETH</small></p>
                                    <p className="is-size-7">Discover the hottest decentralized trends for an entire year.</p>
                                    <button className="button is-warning" onClick={ () => { subscribe("1") }}>Pay with Metamask</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <footer className="modal-card-foot">
                </footer>
            </div>
        </div>  
    </>
    )
}

export default SubscriptionModal;