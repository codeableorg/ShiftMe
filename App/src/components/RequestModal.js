import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { updateRequest, cancelRequest } from "../services/request";
import schedules from "../services/schedule";
import { users } from "../services/user";
import RequestForm from "./RequestForm";
import RequestFormAdmin from "./RequestFormAdmin";
import NewCalendar from "./NewCalendar";
import getInitialWeekDate from "../utils/get-initial-week-date";

function RequestModal({
  requests,
  isOpen,
  onRequestClose,
  id,
  setRequests,
  isAdmin = false
}) {
  const [events, setEvents] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);
  const request = requests.find(req => req.id === id);
  const startDate = getInitialWeekDate(new Date(request.date_Shift));

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

  // if (events.length === 0) return null;
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

  const workShiftConcat = events.reduce((groups, event) => {
    return {
      ...groups,
      [event.user_id]: groups[event.user_id]
        ? groups[event.user_id].concat(event.workShifts)
        : event.workShifts
    };
  }, {});

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

      <NewCalendar
        users={frontdesks.filter(
          ({ id }) => id === request.requester_id || id === request.requested_id
        )}
        workshiftList={workShiftConcat}
        startDate={startDate}
        selectedUsers={[request.requester_id, request.requested_id]}
        selectedDate={request.date_Shift}
      />

      {isAdmin ? (
        <RequestFormAdmin onClick={onClick} />
      ) : (
        <RequestForm onClick={onClick} handleCancel={handleCancel} />
      )}
    </Modal>
  );
}

export default RequestModal;
