/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import Nabvar from "../components/Nabvar";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import RequestModal from "../components/RequestModal";
import { requestsFetch } from "../services/request";
import { users } from "../services/user";

function RequestsView() {
  const [id, setId] = useState(0);
  const [modalIsOpen, setModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);
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
      const response = await users();
      setFrontdesks(response);
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
          width: "700px",
          margin: "0 auto"
        }}
      >
        {requests
          .sort((a, b) => a.id - b.id)
          .map(request => (
            <li
              key={request.id}
              css={{
                padding: "20px",
                border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                  cursor: "pointer"
                }
              }}
            >
              <p>#{request.id}</p>
              <div>
                <span>
                  FrontDesk <b>{findName(request.current_Shift_id)}</b> of
                  workshift <b>{Turn[request.current_Shift_id]} </b>
                  want to change workshift with FrontDesk
                </span>
                <span>
                  <b> {findName(request.requested_Shift_id)} </b>
                  of workshift <b>{Turn[request.requested_Shift_id]} </b>
                </span>
              </div>
              <div css={{ alignSelf: "flex-end" }}>{request.status}</div>
              <button onClick={() => handleRequestSchedule(request.id)}>
                See Schedule Request{" "}
              </button>
            </li>
          ))}
      </ul>
      {requests && (
        <RequestModal
          isOpen={!!modalIsOpen}
          onRequestClose={() => setModalOpen(false)}
          id={id}
          setRequests={setRequests}
          requests={requests}
        />
      )}
    </>
  );
}

export default RequestsView;
