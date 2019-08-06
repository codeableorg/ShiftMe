import React, { useState, useEffect } from "react";
import { updateRequest, cancelRequest } from "../services/request";
import schedules from "../services/schedule";
import { users } from "../services/user";
import RequestForm from "./RequestForm";
import RequestFormAdmin from "./RequestFormAdmin";
import NewCalendar from "./NewCalendar";
import getInitialWeekDate from "../utils/get-initial-week-date";

function RequestModal({
  requests,
  id,
  setRequests,
  setRequestsAdmin,
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

  if (frontdesks.length === 0) return null;

  function onClick(event) {
    event.preventDefault();
    const status = event.target.dataset.value;
    updateRequest(id, status)
      .then(() => {
        setRequests(requests =>
          requests.map(request =>
            request.id === id ? { ...request, status } : request
          )
        );
      }).then(() => {
        setRequestsAdmin(requests =>
          requests.map(request =>
            request.id === id ? { ...request, status } : request
          )
        );
      });
  }

  function handleCancel(event) {
    event.preventDefault();
    cancelRequest(id)
      .then(() => {
        setRequests(requests =>
          requests.map(request =>
            request.id === id ? { ...request, status: "Cancel" } : request
          )
        );
      });
  }

  const workShiftConcat = events.reduce((groups, event) => {
    return {
      ...groups,
      [event.user_id]: groups[event.user_id]
        ? groups[event.user_id].concat(event.workShifts)
        : event.workShifts
    };
  }, {});

  return (
    <>
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
    </>
  );
}

export default RequestModal;
