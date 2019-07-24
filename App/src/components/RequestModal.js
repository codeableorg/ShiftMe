import React from "react";
import Modal from "react-modal";
import { updateRequest, cancelRequest } from "../services/request";

function RequestModal({ request, isOpen, onRequestClose, id, setRequests }) {
  function onClick(event) {
    event.preventDefault();
    const status = event.target.dataset.value;
    updateRequest(id, status)
      .then(onRequestClose)
      .then(() => {
        setRequests(requests =>
          requests.map(request =>
            request.id == id ? { ...request, status } : request
          )
        );
      });
  }

  function handleCancel(event) {
    event.preventDefault();
    cancelRequest(id)
      .then(onRequestClose)
      .then(() => {
        onRequestClose()
        setRequests(requests => requests.map(request => request.id == id ? { ...request, status: "Cancel" } : request))
      });
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div>Motive: 
        {request.map(e =>
          e.id == id ? <div>{e.motive}</div> : <div>{""}</div>
        )}
      </div>
      <form>
        <button data-value="Agree" onClick={onClick}>
          Agree
        </button>
        <button data-value="Disagree" onClick={onClick}>
          Disagree
        </button>
        <button onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </Modal>
  );
}

export default RequestModal;
