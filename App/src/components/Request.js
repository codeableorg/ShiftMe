/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const Turn = {
  1: "Morning",
  2: "Afternoon",
  3: "Night",
  4: "Day Off"
};

function Request({ request, findName, onChange, active }) {
  return (
    <article
      key={request.id}
      onClick={onChange}
      name="text"
      css={{
        outline: "none",
        fontSize: "14px",
        width: "auto",
        padding: "10px 20px",
        minWidth: "119px",
        cursor: "pointer",
        backgroundColor: active ? "rgb(224, 232, 249)" : "#fff",
        borderBottom: "1px solid #35469c"
      }}
    >
      <div css={{ display: "flex", flexDirection: "row" }}>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            width: "100px"
          }}
        >
          <p css={{ fontSize: "12px", color: "#98aeeb" }}>Requester</p>
          <p>{findName(request.requester_id)}</p>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            width: "100px"
          }}
        >
          <p css={{ fontSize: "12px", color: "#98aeeb" }}>From</p>
          <p>{Turn[request.current_Shift_id]}</p>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            width: "100px"
          }}
        >
          <p css={{ fontSize: 12, color: "#98aeeb" }}>Status</p>
          <p>{request.status}</p>
        </div>
      </div>
      <div css={{ display: "flex", flexDirection: "row" }}>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            width: "100px"
          }}
        >
          <p css={{ fontSize: 12, color: "#98aeeb" }}>Requested</p>
          <p>{findName(request.requested_id)}</p>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            width: "100px"
          }}
        >
          <p css={{ fontSize: 12, color: "#98aeeb" }}>To</p>
          <p>{Turn[request.requested_Shift_id]}</p>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            width: "100px"
          }}
        >
          <p css={{ fontSize: "12px", color: "#98aeeb" }}>On</p>
          <p>{request.creationDate}</p>
        </div>
      </div>
    </article>
  );
}

export default Request;
