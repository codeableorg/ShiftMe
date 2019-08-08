/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { updateRequest, cancelRequest } from "../services/request";
import schedules from "../services/schedule";
import { users } from "../services/user";
import RequestForm from "./RequestForm";
import RequestFormAdmin from "./RequestFormAdmin";
import NewCalendar from "./NewCalendar";
import getInitialWeekDate from "../utils/get-initial-week-date";
import { jsx } from "@emotion/core";

const Turn = {
  1: "Morning",
  2: "Afternoon",
  3: "Night",
  4: "Day Off"
};

function RequestModal({
  requests,
  id,
  setRequests,
  setRequestsAdmin,
  isAdmin = false,
  findName
}) {
  const [events, setEvents] = useState([]);
  const [isActionSuccess, setIsActionSuccess] = useState(false);
  const [frontdesks, setFrontdesks] = useState([]);
  const request = requests.find(req => req.id === id);
  const startDate = getInitialWeekDate(new Date(request.date_Shift));
  useEffect(() => {
    async function fetchData() {
      const response = await schedules.schedules();
      setEvents(response);
    }
    fetchData();
  }, [isActionSuccess]);

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
      })
      .then(() => {
        setRequestsAdmin(requests =>
          requests.map(request =>
            request.id === id ? { ...request, status } : request
          )
        );
        setIsActionSuccess(true);
      });
  }

  function handleCancel(event) {
    event.preventDefault();
    cancelRequest(id).then(() => {
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
      <div
        css={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          css={{
            fontSize: "25px",
            color: "#35469c",
            paddingLeft: "16px",
            fontWeight: 400,
            margin: "4px"
            // display: "block"
          }}
        >
          {" "}
          Request Details{" "}
        </div>{" "}
        <div
          css={{
            fontSize: "14px",
            color: "rgb(25, 33, 108)",
            letterSpacing: "0px",
            lineEight: "1.3",
            paddingLeft: "16px",
            margin: "6px"
          }}
        >
          <b> {findName(request.requester_id)} </b> want to change from the
          <b> date shift: {request.date_Shift} </b>{" "}
          <b>{Turn[request.current_Shift_id]} </b> workshift to{" "}
          <b>{Turn[request.requested_Shift_id]} </b> workshift with{" "}
          <b>{findName(request.requested_id)} </b> on{" "}
          <b>{request.date_Shift}</b>
        </div>
        <div
          css={{
            fontSize: "18px",
            color: "#35469c",
            paddingLeft: "16px",
            fontWeight: 400,
            margin: "4px"
            // display: "block"
          }}
        >
          Motive
        </div>
        <div
          css={{
            fontSize: "14px",
            color: "rgb(25, 33, 108)",
            letterSpacing: "0px",
            lineEight: "1.3",
            paddingLeft: "16px",
            margin: "6px"
            // display: "block"
          }}
        >
          {request.motive}
        </div>
        <div
          css={{
            fontSize: "18px",
            color: "#35469c",
            paddingLeft: "16px",
            fontWeight: 400,
            margin: "4px"
            // display: "block"
          }}
        >
          Status
        </div>
        <div
          css={{
            fontSize: "14px",
            color: "rgb(25, 33, 108)",
            letterSpacing: "0px",
            lineEight: "1.3",
            paddingLeft: "16px",
            margin: "6px",
            marginBottom: "8px"
            // display: "block"
          }}
        >
          {request.status}
        </div>
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
        <RequestForm
          onClick={onClick}
          handleCancel={handleCancel}
          requesterId={request.requester_id}
        />
      )}
    </>
  );
}

export default RequestModal;
