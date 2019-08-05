/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import Nabvar from "../components/Nabvar";
import Request from "../components/Request";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import RequestModal from "../components/RequestModal";
import { requestsFetch, requestAdmin } from "../services/request";
import { updatedNotifications } from "../services/notification";
import { users } from "../services/user";
import forecastsData from "../components/ForecastsData";
import { WorkshiftDot } from "../components/WorkshiftDot";


function RequestsView() {
  const [id, setId] = useState(0);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [requestsAdmin, setRequestsAdmin] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);
  const user = useUser();
  const forecasts = forecastsData();
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState(getInitialStartDate());

  const Turn = {
    1: "Morning",
    2: "Afternoon",
    3: "Night",
    4: "OFF"
  };

  function getInitialStartDate() {
    const now = new Date();
    const day = now.getDay();
    if (day === 0) return now;
    now.setDate(now.getDate() - day);
    return now;
  } 

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

  function findName(requester_id) {
    return frontdesks.find(frontdesk => frontdesk.id === requester_id).name;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await requestsFetch();
      setRequests(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await requestAdmin();
      setRequestsAdmin(response);
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

  useEffect(() => {
    async function fetchData() {
      await updatedNotifications();
    }
    fetchData();
  }, []);

  function handleRequestSchedule(id) {
    setId(id);
    setModalOpen(true);
  }

  if (!user) return <Redirect to="login" noThrow />;
  if (frontdesks.length === 0) return "Cargando...";
  if (!requests.length === 0) return "Cargando...";

  return (
    <>
      <Nabvar />
      <ul
        css={{
          listStyle: "none",
          padding: 0,
          width: "701px",
          margin: "0 auto"
        }}
      >
        {requests
          .sort((a, b) => a.id - b.id)
          .map(request => (
            <Request
              findName={findName}
              Turn={Turn}
              request={request}
              handleRequestSchedule={handleRequestSchedule}
            />
          ))}
        {requestsAdmin.map(request => (
          <Request
            findName={findName}
            Turn={Turn}
            request={request}
            handleRequestSchedule={handleRequestSchedule}
          />
        ))}
      </ul>
      {requests && (
        <RequestModal
          isOpen={!!modalIsOpen}
          onRequestClose={() => setModalOpen(false)}
          id={id}
          setRequests={setRequests}
          requests={requests}
          isAdmin={user.rol === "Supervisor"}
          workShiftList={workShiftConcat}
          users={users}
          forecast={forecastsConcat}
          startDate={startDate}
        />
      )}
    </>
  );
}

export default RequestsView;
