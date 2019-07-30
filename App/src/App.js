/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Global } from "@emotion/core";
import { Router } from "@reach/router";
import Login from "./views/Login";
import HomeView from "./views/HomeView";
import UsersView from "./views/UsersView";
import RequestsView from "./views/RequestsView";
import { UserProvider } from "./contexts/user";

function App() {
  return (
    <UserProvider>
      <main>
        <Global
          styles={{
            body: {
              fontFamily: "Roboto, sans-serif",
              margin: 0,
              color: "rgba(0,0,0,0.87)"
            },
            "button, input": {
              fontFamily: "inherit"
            }
          }}
        />
        <Router>
          <HomeView path="/" />
          <Login path="/login" />
          <RequestsView path="/requests" />
          <UsersView path="/users" />
        </Router>
      </main>
    </UserProvider>
  );
}

export default App;
