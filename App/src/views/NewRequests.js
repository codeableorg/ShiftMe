/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
import Nabvar from "../components/Nabvar";

const Requests = () => (
  <div>
    <Nabvar />
    <h2>Requests</h2>
    <div
      name="request"
      css={{
        flexShrink: "0",
        display: "flex",
        width: "1152px"
      }}
    >
      <div
        name="requestList"
        css={{
          display: "block",
          width: "350px"
        }}
      >
        <ul name="list" css={{ padding: 0, margin: 0 }}>
          <li
            name="text"
            css={{
              outline: "none",
              fontSize: "12px",
              width: "auto",
              padding: "10x 20px",
              minWidth: "119px",
              backgroundColor: "rgb(224, 232, 249)"
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
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>Requester</p>
                <p>Diego Cuevas</p>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100px"
                }}
              >
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>From</p>
                <p>Morning</p>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100px"
                }}
              >
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>Status</p>
                <p>Accepted</p>
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
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>Requested</p>
                <p>Marieth Perez</p>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100px"
                }}
              >
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>To</p>
                <p>Morning</p>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100px"
                }}
              >
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>On</p>
                <p>7/29/2019</p>
              </div>
            </div>
          </li>
          <li
            name="text"
            css={{
              outline: "none",
              fontSize: "12px",
              width: "auto",
              padding: "10x 20px",
              minWidth: "119px",
              backgroundColor: "rgb(224, 232, 249)"
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
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>Requester</p>
                <p>Diego Cuevas</p>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100px"
                }}
              >
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>From</p>
                <p>Morning</p>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100px"
                }}
              >
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>Status</p>
                <p>Accepted</p>
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
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>Requested</p>
                <p>Marieth Perez</p>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100px"
                }}
              >
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>To</p>
                <p>Morning</p>
              </div>
              <div
                css={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100px"
                }}
              >
                <p css={{ fontSize: "10px", color: "#98aeeb" }}>On</p>
                <p>7/29/2019</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
        name="requestDetails"
        css={{
          flexShrink: "0",
          userSelect: "none",
          pointerEvents: "none",
          width: "100%",
          backgroundColor: "#00FFFF"
        }}
      >
        <p>jhgjh</p>
      </div>
    </div>
  </div>
);

export default Requests;
