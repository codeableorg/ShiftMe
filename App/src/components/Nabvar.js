/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Nabvar() {
  const linkStyle = {
    marginRight: "1em",
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "#003569"
    }
  };
  return (
    <nav>
      <ul css={{ listStyle: "none", margin: 0, padding: 0, display: "flex" }}>
        <li>
          <Link css={linkStyle} to="/">
            Shiftme
          </Link>
        </li>
        <li css={{ marginLeft: "50px" }}>
          <Link css={linkStyle} to="/">
            Username
          </Link>
        </li>
        <li css={{ marginLeft: "50px" }}>
          <Link css={linkStyle} to="/requests">
            Requests
          </Link>
        </li>
        <li css={{ marginLeft: "50px" }}>
          <Link css={linkStyle} to="/">
            Create User
          </Link>
        </li>
        <li css={{ marginLeft: "auto" }}>
          <Link css={linkStyle} to="/login">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nabvar;
