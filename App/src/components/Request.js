/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Request({request, frontdesks, handleRequestSchedule}) {
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
      <span>
        FrontDesk{" "}
        {
          frontdesks.find(frontdesk => frontdesk.id === request.requester_id)
            .name
        }{" "}
        of workshift{" "}
        {request.current_Shift_id === 4
          ? "OFF"
          : request.current_Shift_id === 1
          ? "Morning"
          : request.current_Shift_id === 2
          ? "Afternoon"
          : "Night"}{" "}
        want to change workshift with FrontDesk{" "}
        {
          frontdesks.find(frontdesk => frontdesk.id === request.requested_id)
            .name
        }{" "}
        of workshift{" "}
        {request.requested_Shift_id === 4
          ? "OFF"
          : request.requested_Shift_id === 1
          ? "Morning"
          : request.requested_Shift_id === 2
          ? "Afternoon"
          : "Night"}
      </span>
      <div css={{ alignSelf: "flex-end" }}>{request.status}</div>
      <button onClick={() => handleRequestSchedule(request.id)}>
        See Schedule Request{" "}
      </button>
    </li>
  );
}

export default Request;
