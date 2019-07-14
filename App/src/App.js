import React from "react";
import { Router } from "@reach/router";
import Login from "./views/Login";
import HomeView from "./views/HomeView";
import UsersView from "./views/UsersView";
import RequestsView from "./views/RequestsView";
import { UserProvider } from "./contexts/user";

function App() {
  return (
    <UserProvider>
      <div>
        <Router>
          <HomeView path="/" />
          <Login path="/login" />
          <RequestsView path="/requests" />
          <UsersView path="/users" />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
