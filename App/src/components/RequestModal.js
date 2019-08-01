import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { updateRequest, cancelRequest } from "../services/request";
import Calendar from "./Calendar";
import schedules from "../services/schedule";
import { users } from "../services/user";
import PreviewWeek from "./PreviewWeek";

function RequestModal({ requests, isOpen, onRequestClose, id, setRequests }) {
  const [events, setEvents] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);
  const [request, setRequest] = useState({});

  React.useEffect(() => {
    const reqFind = requests.find(req => req.id === id);
    setRequest(reqFind);
  }, [requests, id]);

  useEffect(() => {
    async function fetchData() {
      const response = await schedules.schedules();
      setEvents(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await users();
      setFrontdesks(response);
    }
    fetchData();
  }, []);

  if (events.length === 0) return null;
  if (frontdesks.length === 0) return null;

  function onClick(event) {
    event.preventDefault();
    const status = event.target.dataset.value;
    updateRequest(id, status)
      .then(onRequestClose)
      .then(() => {
        setRequests(requests =>
          requests.map(request =>
            request.id === id ? { ...request, status } : request
          )
        );
      });
  }

  function handleCancel(event) {
    event.preventDefault();
    cancelRequest(id)
      .then(onRequestClose)
      .then(() => {
        onRequestClose();
        setRequests(requests =>
          requests.map(request =>
            request.id === id ? { ...request, status: "Cancel" } : request
          )
        );
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
      ariaHideApp={isOpen}
    >
      <div>
        Motive:
        {requests.map(e =>
          e.id === id ? (
            <div key={e.id}>{e.motive}</div>
          ) : (
            <div key={e.id}>{""}</div>
          )
        )}
      </div>
      <PreviewWeek request={request} frontdesks={frontdesks} events={events} />
      <form
        style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}
      >
        <button data-value="Agree" onClick={onClick}>
          Agree
        </button>
        <button data-value="Disagree" onClick={onClick}>
          Disagree
        </button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </Modal>
  );
}

export default RequestModal;
