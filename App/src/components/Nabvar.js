/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useUserUpdater } from "../contexts/user";
import { logout } from "../services/user";

function Nabvar() {
  const updateUser = useUserUpdater();
  async function handleLogoutClick() {
    await logout();
    updateUser({ type: "LOGOUT" });
  }
  const linkStyle = {
    marginRight: "1em",
    textDecoration: "none",
    color: "black",
    transition: "color .20s ease",
    fontWeight: "300",
    lineHeight: "80px",
    "&:hover": {
      color: "#f33959",
      background: "#fff"
    }
  };
  return (
    <nav>
      <ul
        css={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          borderBottom: "1px solid #e5edef",
          justifyContent: "center"
        }}
      >
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
        <li css={{ marginLeft: "auto", fontWeight: "300", cursor: "pointer" }}>
          <div css={linkStyle} onClick={handleLogoutClick}>
            Logout
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nabvar;
