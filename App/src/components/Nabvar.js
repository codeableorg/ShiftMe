/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useUserUpdater, useUser } from "../contexts/user";
import { logout } from "../services/user";

function NavLink(props) {
  return (
    <Link
      {...props}
      css={{
        fontSize: "1em",
        color: "#35469C",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        padding: "0 25px",
        "&:first-of-type": {
          paddingLeft: 0
        },
        "&:last-of-type": {
          paddingRight: 0
        }
      }}
    />
  );
}

function Notification() {
  return (
    <figure
      css={{
        display: "inline-block",
        margin: 0,
        backgroundColor: "#EF4E4E",
        borderRadius: "50%",
        width: 10,
        height: 10,
        marginLeft: "5px"
      }}
    />
  );
}

function Navbar({ hasNotifications }) {
  const updateUser = useUserUpdater();
  const user = useUser();
  async function handleLogoutClick() {
    await logout();
    updateUser({ type: "LOGOUT" });
  }

  return (
    <header
      css={{
        background: "white",
        display: "grid",
        gridTemplateColumns: "auto 1fr auto",
        gridTemplateRows: "auto",
        gridTemplateAreas: "'logo navigation sign-out'",
        gridColumnGap: "40px",
        padding: "15px 30px",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Link
        css={{
          display: "flex",
          alignItems: "center",
          color: "#19216C",
          textDecoration: "none",
          gridArea: "logo"
        }}
        to="/"
      >
        <figure
          css={{
            backgroundColor: "#19216C",
            margin: 0,
            marginRight: "15px",
            width: "40px",
            height: "40px",
            borderRadius: "50%"
          }}
        />
        <h2
          css={{
            color: "#19216C",
            fontWeight: 700,
            fontSize: "20px",
            margin: 0
          }}
        >
          ShiftMe
        </h2>
      </Link>
      <nav css={{ display: "flex", gridArea: "navigation" }}>
        <NavLink to="/requests">
          Requests {hasNotifications && <Notification />}
        </NavLink>
        <NavLink to="/">{user.name}</NavLink>
        {/* <NavLink to="/users">Users</NavLink> */}
      </nav>
      <div css={{ gridArea: "sign-out" }}>
        <button
          css={{
            background: "none",
            border: "none",
            color: "#35469C",
            cursor: "pointer",
            fontSize: "1em"
          }}
          onClick={handleLogoutClick}
        >
          Sign Out
        </button>
      </div>
    </header>
  );
}

export default Navbar;
