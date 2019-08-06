/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Button } from "./Ui";

function Alert({ message, onClose }) {
  return (
    <div
      css={{
        display: "flex",
        position: "fixed",
        top: "0",
        backgroundColor: "rgba(19, 19, 19, 0.45)",
        zIndex: "10000",
        width: "100%",
        justifyContent: "center",
        height: "100%",
        alignItems: "center"
      }}
    >
      <div
        css={{
          background: "#fff",
          width: "300px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "5px",
          padding: "16px"
        }}
      >
        <div
          css={{
            padding: "12px",
            fontSize: "20px",
            marginBottom: "1em",
            fontWeight: "bold",
            letterSpacing: "0.25px",
            color: "#35469C"
          }}
        >
          {message}
        </div>
        <div>
          <Button onClick={onClose}>Ok</Button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
