/** @jsx jsx */

import React, { useState, useEffect, Fragment } from "react";
import { jsx } from "@emotion/core";
import { Redirect } from "@reach/router";
import Nabvar from "../components/Nabvar";
import { requestsFetch, requestAdmin } from "../services/request";
import RequestModal from "../components/RequestModal";
import { useUser } from "../contexts/user";
import Request from "../components/Request";
import { users } from "../services/user";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [requestsAdmin, setRequestsAdmin] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);

  const [id, setId] = useState(0);
  const user = useUser();

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

  function findName(requester_id) {
    return frontdesks.find(frontdesk => frontdesk.id === requester_id).name;
  }

  if (!user) return <Redirect to="login" noThrow />;
  if (frontdesks.length === 0)
    return (
      <>
        <Nabvar />
        <h3
          css={{
            fontSize: "1em",
            color: "#35469C"
          }}
        >
          Loading...
        </h3>
      </>
    );

  return (
    <div>
      <Nabvar />
      <div
        name="request"
        css={{
          flexShrink: "0",
          display: "flex",
          width: "100%"
        }}
      >
        <div
          name="requestList"
          css={{
            display: "block",
            width: "350px"
          }}
        >
          <h2
            css={{
              fontSize: "25px",
              color: "#35469c",
              paddingLeft: "16px",
              fontWeight: 400
            }}
          >
            Requests
          </h2>
          <ul name="list" css={{ padding: 0, margin: 0 }}>
            {requests
              .concat(requestsAdmin)
              .sort((a, b) => a.id - b.id)
              .map(request => (
                <Request
                  key={request.id}
                  findName={findName}
                  request={request}
                  active={request.id === id}
                  onChange={() => setId(request.id)}
                />
              ))}
            {/* {requestsAdmin.map(request => (
              <Request
                findName={findName}
                request={request}
                active={request.id === id}
                onChange={() => setId(request.id)}
              />
            ))} */}
          </ul>
        </div>
        <div
          name="requestDetails"
          css={{
            flexShrink: "0",
            flex: "1",
            maxWidth: "100%",
            backgroundColor: "#e0e8f9",
            padding: "16px"
          }}
        >
          {id !== 0 && (
            <RequestModal
              id={id}
              setRequests={setRequests}
              requests={requests}
              isAdmin={user.rol === "Supervisor"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Requests;
