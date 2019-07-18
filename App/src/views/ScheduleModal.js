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

const ScheduleModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <h2>Hello</h2>
    <div>I am a modal</div>
    <form>
      <input />
     
      <button>Send</button>
      <button>Clear</button>
      <button>cancel</button>
      <button onClick={onRequestClose}>close</button>
    </form>
  </Modal>
);

export default ScheduleModal;
