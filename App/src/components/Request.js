/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Request({request, findName, handleRequestSchedule, Turn}) {
  return (
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
        FrontDesk <b>{findName(request.requester_id)}</b> of
        workshift <b>{Turn[request.current_Shift_id]} </b>
        want to change workshift with FrontDesk
      </span>
      <span>
        <b> {findName(request.requested_id)} </b>
        of workshift <b>{Turn[request.requested_Shift_id]} </b>
      </span>
    </div>
    <div css={{ alignSelf: "flex-end" }}>{request.status}</div>
    <button onClick={() => handleRequestSchedule(request.id)}>
      See Schedule Request{" "}
    </button>
  </li>
  );
}

export default Request;
