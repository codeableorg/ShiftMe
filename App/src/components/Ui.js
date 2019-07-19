/** @jsx jsx */
import { jsx } from "@emotion/core";

const styleInput = {
  background: "none",
  border: "1px solid #eaeaea",
  borderRadius: ".25rem",
  boxSizing: "border-box",
  display: "block",
  fontSize: "1rem",
  padding: ".5rem",
  color: "#34495e",
  width: "100%",
  "&:focus": {
    outline: "none",
    borderColor: "rgba(242, 107, 117, 0.5)"
  }
};

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        backgroundColor: "#e5edef",
        border: "1px solid #e5edef",
        borderRadius: ".25rem",
        color: "black",
        cursor: "pointer",
        fontSize: ".8rem",
        padding: ".75rem 0",
        transition: "all 200ms ease",
        textAlign: "center",
        textTransform: "uppercase",
        width: "100%",
        "&:hover": {
          backgroundColor: "white",
          color: "#e5edef"
        },
        ...styles
      }}
    />
  );
}


function SecondaryButton({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        width: "100%",
        display: "block",
        backgroundColor: "#1ec69f",
        border: "1px solid #1ec69f",
        color: "#fff",
        padding: ".75rem 0",
        margin: "8px 0",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: ".9rem",
        letterSpacing: ".25px",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#1ec69f"
        },
        ...styles
      }}
    />
  );
}

function Card({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        background: "white",
        borderRadius: ".5em",
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, .12)",
        boxSizing: "border-box",
        padding: "2rem",
        width: "100%",
        ...styles
      }}
    />
  );
}

function Input({ styles, ...props }) {
  return (
    <input
      {...props}
      css={{
        ...styleInput,
        ...styles
      }}
    />
  );
}

export { Button, Card, Input, SecondaryButton };