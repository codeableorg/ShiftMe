/** @jsx jsx */
import { jsx } from "@emotion/core";

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        backgroundColor: "#19216C",
        border: "none",
        borderRadius: "4px",
        boxShadow: "0 2px 4px rgba(0, 85, 255, 0.4)",
        color: "white",
        fontWeight: "500",
        cursor: "pointer",
        fontSize: "1em",
        padding: "14px",
        transition: "all 200ms ease",
        textAlign: "center",
        width: "100%",
        outline: "none",
        "&:hover": {
          backgroundColor: "#4055A8",
          color: "white",
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
        background: "white",
        border: "1px solid #98AEEB",
        borderRadius: "4px",
        boxSizing: "border-box",
        display: "block",
        fontSize: "1rem",
        padding: "14px 20px",
        color: "#98AEEB",
        width: "100%",
        "&:focus": {
          outline: "none",
          color: "#4055A8"
        },
        ...styles
      }}
    />
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Add UI Label component

function Label({ styles, ...props }) {
  return (
    <label
      {...props}
      css={{
        display: "block",
        fontSize: "1em",
        color: "#4055A8",
<<<<<<< HEAD
=======
>>>>>>> Add better buttons and input styles
=======
>>>>>>> Add UI Label component
        ...styles
      }}
    />
  );
}

export { Button, Card, Input, SecondaryButton, Label };
