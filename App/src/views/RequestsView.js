/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import Nabvar from "../components/Nabvar";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import RequestModal from "./RequestModal";
import requestsFetch from "../services/request";
import { users } from "../services/user";

function RequestsView() {
  const [modalIsOpen, setModalOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);
  const user = useUser();
  useEffect(() => {
    async function fetchData() {
      const response = await requestsFetch.requestsFetch();
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

  function handleRequestSchedule(event) {
    setModalOpen(true);
    event.preventDefault();
  }
  if (!user) return <Redirect to="login" noThrow />;
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
        {requests.map(request => (
          <li
            css={{
              padding: "20px",
              border: "1x solid black",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                cursor: "pointer"
              }
            }}
          >
            <p>#{request.id}</p>
            <p>
              FrontDesk{" "}
              {
                frontdesks.find(
                  frontdesk => frontdesk.id === request.requester_id
                ).name
              }{" "}
              de turno{" "}
              {request.current_Shift_id === 4
                ? "OFF"
                : request.current_Shift_id === 1
                ? "Morning"
                : request.current_Shift_id === 2
                ? "Afternoon"
                : "Night"}{" "}
              want to change workshift with FrontDesk{" "}
              {
                frontdesks.find(
                  frontdesk => frontdesk.id === request.requested_id
                ).name
              }{" "}
              de turno :
              {
                frontdesks.find(
                  frontdesk => frontdesk.id === request.requested_id
                ).name
              }{" "}
              de turno{" "}
              {request.requested_Shift_id === 4
                ? "OFF"
                : request.requested_Shift_id === 1
                ? "Morning"
                : request.requested_Shift_id === 2
                ? "Afternoon"
                : "Night"}
            </p>
            <div css={{ alignSelf: "flex-end" }}>{request.status}</div>
            <button onClick={handleRequestSchedule}>
              See Schudule Request{" "}
            </button>
          </li>
        ))}
      </ul>
      <RequestModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalOpen(false)}
      />
    </>
  );
}

export default RequestsView;
