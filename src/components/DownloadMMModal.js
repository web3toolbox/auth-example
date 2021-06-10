import styled from "styled-components";

const DownloadMMModal = ({ downloadModal, toggleDownloadModal }) => {
  const StyledModalCard = styled.div`
    width: 400px;
    height: 340px;
  `;
  const StyledButton = styled.button`
    border-radius: 30px;
    font-size: 20px;
    width: 320px;
    height: 60px;
    background-color: #037dd6;
    border: 1px solid #037dd6;
    a {
      color: white;
    }
  `;
  return (
    <div className={`modal ${downloadModal ? "is-active" : ""}`}>
      <div className="modal-background"></div>

      <StyledModalCard className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Download MetaMask</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => toggleDownloadModal()}
          ></button>
        </header>
        <section
          className="modal-card-body"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="is-size-4 mb-0">
            To sign in with MetaMask you first need to download the MetaMask
            browser extension.
          </p>
          <StyledButton
            className="button"
            onClick={() => toggleDownloadModal()}
          >
            <a
              href="https://metamask.io/download"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Chrome Extension
            </a>
          </StyledButton>
        </section>
      </StyledModalCard>
    </div>
  );
};

export default DownloadMMModal;
