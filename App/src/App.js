import React from "react";
import { Router } from "@reach/router";
import Login from "./views/Login";
import HomeView from "./views/HomeView";
import UsersView from "./views/UsersView";
import RequestsView from "./views/RequestsView";

function App() {
  return (
    <div>
      <Router>
        <HomeView path="/" />
        <Login path="/login" />
        <RequestsView path="/requests" />
        <UsersView path="/users" />
      </Router>
    </div>
  );
}

export default App;
