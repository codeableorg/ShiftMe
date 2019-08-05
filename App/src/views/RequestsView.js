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

function RequestsView() {
  const [id, setId] = useState(0);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [requestsAdmin, setRequestsAdmin] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);
  const user = useUser();

  const Turn = {
    1: "Morning",
    2: "Afternoon",
    3: "Night",
    4: "OFF"
  };

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
      {requests && !!modalIsOpen && (
        <RequestModal
          isOpen={!!modalIsOpen}
          onRequestClose={() => setModalOpen(false)}
          id={id}
          setRequests={setRequests}
          requests={[...requests, ...requestsAdmin]}
          isAdmin={user.rol === "Supervisor"}
        />
      )}
    </>
  );
}

export default RequestsView;
