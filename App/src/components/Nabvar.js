/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useUserUpdater } from "../contexts/user";
import { logout, users } from "../services/user";

function Nabvar() {
  const updateUser = useUserUpdater();
  const user = JSON.parse(localStorage.getItem("user"));
  async function handleLogoutClick() {
    await logout();
    updateUser({ type: "LOGOUT" });
  }
  const linkStyle = {
    marginRight: "1em",
    textDecoration: "none",
    color: "inherit",
    transition: "color .20s ease",
    fontWeight: "300",
    padding: "5px",
    "&:hover": {
      color: "#f33959",
      background: "#fff"
    }
  };
  return (
    <nav
      css={{
        background: "#fff",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.1)",
        padding: "15px"
      }}
    >
      <ul
        css={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
          maxWidth: "1000px"
        }}
      >
        <li>
          <Link css={linkStyle} to="/">
            Shiftme
          </Link>
        </li>
        <li>
          <Link css={linkStyle} to="/">
            {user.name}
          </Link>
        </li>
        <li>
          <Link css={linkStyle} to="/requests">
            Requests
          </Link>
        </li>
        <li>
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
