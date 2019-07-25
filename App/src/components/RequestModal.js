import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { updateRequest, cancelRequest } from "../services/request";
import Calendar from "./Calendar";
import { useUser } from "../contexts/user";
import schedules from "../services/schedule";
import { users } from "../services/user";

function RequestModal({ request, isOpen, onRequestClose, id, setRequests }) {
  const [events, setEvents] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);
  const [shiftsClicked, setShiftsClicked] = useState([]);

  React.useEffect(() => {
    const reqFind = request.find(req => req.id === id);
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
  }, [request, id]);

  const forecasts = [
    {
      id: 1,
      month: "Julio",
      typeForecast: "Max-Occupancy",
      dataDays: [
        { date: "2019/07/01", data: 77.78 },
        { date: "2019/07/02", data: 79.23 },
        { date: "2019/07/03", data: 93.72 },
        { date: "2019/07/04", data: 87.92 },
        { date: "2019/07/05", data: 74.88 },
        { date: "2019/07/06", data: 54.42 },
        { date: "2019/07/07", data: 29.95 },
        { date: "2019/07/08", data: 77.78 },
        { date: "2019/07/09", data: 79.23 },
        { date: "2019/07/10", data: 93.72 },
        { date: "2019/07/11", data: 87.92 },
        { date: "2019/07/12", data: 74.88 },
        { date: "2019/07/13", data: 59.42 },
        { date: "2019/07/14", data: 29.95 },
        { date: "2019/07/15", data: 77.78 },
        { date: "2019/07/16", data: 79.23 },
        { date: "2019/07/17", data: 93.72 },
        { date: "2019/07/18", data: 87.92 },
        { date: "2019/07/19", data: 74.88 },
        { date: "2019/07/20", data: 54.42 },
        { date: "2019/07/21", data: 29.95 },
        { date: "2019/07/22", data: 59.42 },
        { date: "2019/07/23", data: 29.95 },
        { date: "2019/07/24", data: 87.92 },
        { date: "2019/07/25", data: 54.42 },
        { date: "2019/07/26", data: 77.78 },
        { date: "2019/07/27", data: 54.42 },
        { date: "2019/07/28", data: 59.42 },
        { date: "2019/07/29", data: 87.92 },
        { date: "2019/07/30", data: 59.42 },
        { date: "2019/07/31", data: 77.78 }
      ],
      created_at: "2019-07-13T00:32:07.485Z",
      updated_at: "2019-07-13T00:32:07.485Z"
    },
    {
      id: 2,
      month: "Julio",
      typeForecast: "Arrival-Rooms",
      dataDays: [
        { date: "2019/07/01", data: 36 },
        { date: "2019/07/02", data: 70 },
        { date: "2019/07/03", data: 60 },
        { date: "2019/07/04", data: 41 },
        { date: "2019/07/05", data: 31 },
        { date: "2019/07/06", data: 24 },
        { date: "2019/07/07", data: 10 },
        { date: "2019/07/08", data: 36 },
        { date: "2019/07/09", data: 70 },
        { date: "2019/07/10", data: 60 },
        { date: "2019/07/11", data: 41 },
        { date: "2019/07/12", data: 31 },
        { date: "2019/07/13", data: 24 },
        { date: "2019/07/14", data: 10 },
        { date: "2019/07/15", data: 31 },
        { date: "2019/07/16", data: 24 },
        { date: "2019/07/17", data: 36 },
        { date: "2019/07/18", data: 70 },
        { date: "2019/07/19", data: 60 },
        { date: "2019/07/20", data: 41 },
        { date: "2019/07/21", data: 31 },
        { date: "2019/07/22", data: 24 },
        { date: "2019/07/23", data: 10 },
        { date: "2019/07/24", data: 60 },
        { date: "2019/07/25", data: 41 },
        { date: "2019/07/26", data: 24 },
        { date: "2019/07/27", data: 60 },
        { date: "2019/07/28", data: 30 },
        { date: "2019/07/29", data: 41 },
        { date: "2019/07/30", data: 24 },
        { date: "2019/07/31", data: 31 }
      ],
      created_at: "2019-07-13T00:32:07.499Z",
      updated_at: "2019-07-13T00:32:07.499Z"
    }
  ];

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

  const workShiftConcat = events.reduce((groups, event) => {
    return {
      ...groups,
      [event.user_id]: groups[event.user_id]
        ? groups[event.user_id].concat(event.workShifts)
        : event.workShifts
    };
  }, {});

  const forecastsConcat = forecasts.reduce((groups, forecast) => {
    return {
      ...groups,
      [forecast.typeForecast]: groups[forecast.typeForecast]
        ? groups[forecast.typeForecast].concat(forecast.dataDays)
        : forecast.dataDays
    };
  }, {});

  function calcDay(date) {
    const nameDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurday",
      "Friday",
      "Saturday"
    ];
    var d = new Date(date);
    return nameDays[d.getDay()];
  }

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
            request.id == id ? { ...request, status: "Cancel" } : request
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
        {request.map(e =>
          e.id === id ? (
            <div key={e.id}>{e.motive}</div>
          ) : (
            <div key={e.id}>{""}</div>
          )
        )}
      </div>
      <Calendar
        workShiftConcat={workShiftConcat}
        frontdesks={frontdesks}
        calcDay={calcDay}
        start={0}
        end={7}
        shiftsClicked={shiftsClicked}
        saveShiftsClicked={null}
      />
      <form>
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
