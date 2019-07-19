/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import Nabvar from "../components/Nabvar";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import RequestModal from "./RequestModal";
import requests from "../services/request"

const request = [
  { name: "Angie", id: 3456 },
  { name: "Diego", id: 756 },
  { name: "Marieth", id: 221 }
];

function RequestsView() {
  const [modalIsOpen, setModalOpen] = useState([false]);
  const user = useUser();
  console.log(requests.requests())

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
        {request.map(request => (
          <li
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
            <p>{request.name} quiere cambiar su turno contigo</p>
            <div css={{ alignSelf: "flex-end" }}>Pending </div>
            <button onClick={handleRequestSchedule}>
              See Schudule request{" "}
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
