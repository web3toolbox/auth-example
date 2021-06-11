import { 
    NewspaperOutline 
} from 'react-ionicons';
import axios from 'axios';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';

export const SubscriptionModal = ({open, setSubcriptionModalOpen}) => {
    const active = open ? "is-active" : "";

    const subscriptionModel = {
        "0.1":  2592000000, // number of seconds in 30 days
        "1": 31536000000 // number of seconds in a year
    }
    const subscribe = async (amount)  => {
        try {
            const provider = await detectEthereumProvider();
            const web3 = await new Web3(provider)
            const accounts = await web3.eth.getAccounts();
            const result = await web3.eth.sendTransaction({ 
                from: accounts[0], 
                to: "0x15eA52861Bc87bEAfc7684a0B76BCEa55CB973Fd", 
                value: web3.utils.toWei(amount, "ether")
            });
            const test = subscriptionModel[amount];
            const dtest = Date.now();
            const expirationDate = Date.now() + subscriptionModel[amount];

            if (result.transactionHash){
                const subscriptionResult = await axios.post(
                    "https://web3.bluer.workers.dev/auth/subscribe",
                    {
                      account: accounts[0],
                      expiration: expirationDate
                    }
                  );
                  const test = test;
            }
            
            setSubcriptionModalOpen(false);
    
        } catch (err) {
            alert("doh", err);
        }
      }

    return (
        <>
        <div className={`modal ${active}`}>
            <div className="modal-background"></div>
                <div className="modal-content">
                <header className="modal-card-head">
                <p className="modal-card-title">Subscribe to Decentral Times</p>
                <button className="delete" aria-label="close" onClick={()=>setSubcriptionModalOpen(false)}></button>
                </header>
                <section className="modal-card-body">
                    <section className="section pt-1 pb-1">
                        <div className="columns">
                            <div className="column is-10">
                                <div className="content is-medium has-text-left">
                                    <p className="is-size-4 mb-0"><NewspaperOutline color="silver" /> Subscribe for 1 month <small className="is-size-6">0.1 ETH</small></p>
                                    <p className="is-size-7">Discover the hottest decentralized trends for a month.</p>
                                    <button className="button is-warning" onClick={ () => { subscribe("0.1") }}>
                                        <strong>Pay with Metamask</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-10">
                                <div className="content is-medium has-text-left">
                                    <p className="is-size-4 mb-0"><NewspaperOutline color="gold" /> Subscribe for 12 months <small className="is-size-6">1 ETH</small></p>
                                    <p className="is-size-7">Discover the hottest decentralized trends for an entire year.</p>
                                    <button className="button is-warning" onClick={ () => { subscribe("1") }}>
                                        <strong>Pay with Metamask</strong>
                                    </button>
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
