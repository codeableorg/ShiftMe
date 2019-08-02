import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { updateRequest, cancelRequest } from "../services/request";
import schedules from "../services/schedule";
import { users } from "../services/user";
import PreviewWeek from "./PreviewWeek";
import RequestForm from "../components/RequestForm";
import RequestFormAdmin from "../components/RequestFormAdmin";
import Calendar from "./Calendar";
import { EventEmitter } from "events";

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
  const [request, setRequest] = useState({});
  const [shiftsClicked, setShiftsClicked] = useState([]);

  const workShiftConcat = events.reduce((groups, event) => {
    return {
      ...groups,
      [event.user_id]: groups[event.user_id]
        ? groups[event.user_id].concat(event.workShifts)
        : event.workShifts
    };
  }, {});

  function calcDay(date) {
    const nameDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var d = new Date(date);
    return nameDays[d.getDay()];
  }

      React.useEffect(() => {
    const reqFind = requests.find(req => req.id === id);
    const data = reqFind
      ? [
          {
            id: reqFind.requester_id,
            date: reqFind.date_Shift,
            shift_id: reqFind.current_Shift_id
          },
          {
            id: reqFind.requested_id,
            date: reqFind.date_Shift,
            shift_id: reqFind.requested_Shift_id
          }
        ]
      : [];
    setShiftsClicked(data);
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
      <PreviewWeek request={request} frontdesks={frontdesks} events={events}/>
        <Calendar
        workShiftConcat={workShiftConcat}
        frontdesks={frontdesks}
        calcDay={calcDay}
        start={0}
        end={7}
        shiftsClicked={shiftsClicked}
        saveShiftsClicked={null}
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
