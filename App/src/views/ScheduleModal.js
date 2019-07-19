import React from "react";
import Modal from "react-modal";
import Calendar from "../components/Calendar";

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
    <h2>Schudule Change</h2>
    <Calendar />
    <div>
      Motive
      <form>
        <textarea />

        <button>Send</button>
        <button>Clear</button>
        <button>Close</button>
        <button onClick={onRequestClose}>Close</button>
      </form>
    </div>
  </Modal>
);

export default ScheduleModal;
