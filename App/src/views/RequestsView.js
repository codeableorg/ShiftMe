/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Nabvar from "../components/Nabvar";

const REQUESTS = [
  { name: "Angie", id: 3456 },
  { name: "Diego", id: 756 },
  { name: "Marieth", id: 221 }
];
function RequestsView() {
  return (
    <>
      <Nabvar />{" "}
      <ul
        css={{
          listStyle: "none",
          padding: 0,
          width: "700px",
          margin: "0 auto"
        }}
      >
        {REQUESTS.map(request => (
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
          </li>
        ))}
      </ul>
    </>
  );
}

export default RequestsView;
