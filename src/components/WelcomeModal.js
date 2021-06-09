const WelcomeModal = ({welcomeModal, toggleWelcomeModal}) =>{
    return(
        <div className={`modal ${ welcomeModal ? 'is-active' : ''}`}>
            <div className="modal-background"></div>
                <div className="modal-content">
                <header className="modal-card-head">
                <p className="modal-card-title">Welcome to Leaping Lubins, friend!</p>
                <button className="delete" aria-label="close" onClick={()=>toggleWelcomeModal()}></button>
                </header>
                <section className="modal-card-body">
                    <section className="section pt-1 pb-1">
                        <div className="columns">
                            <div className="column is-10">
                                <div className="content is-medium has-text-left">
                                    <p className="is-size-4 mb-0">Welcome aboard</p>
                                    <p className="is-size-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <footer className="modal-card-foot">
                </footer>
            </div>
        </div>
        )
}

export default WelcomeModal