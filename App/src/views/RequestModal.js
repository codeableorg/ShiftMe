import React from "react";
import Modal from "react-modal";


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

const RequestModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <h2>Request</h2>
    <div> </div>
    <form>
      <input />
     
      <button>Accept</button>
      <button>Reject</button>
      <button>Close</button>
      <button onClick={onRequestClose}>close</button>
      
    </form>
  </Modal>
);

export default RequestModal;
