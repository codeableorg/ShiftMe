/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Global } from "@emotion/core";
import { Router } from "@reach/router";
import Login from "./views/Login";
import HomeView from "./views/HomeView";
import UsersView from "./views/UsersView";
import NewRequests from "./views/NewRequests";
import { UserProvider } from "./contexts/user";

function App() {
  return (
    <UserProvider>
      <main>
        <Global
          styles={{
            body: {
              background: "#f2f3f5",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
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
          <NewRequests path="/requests" />
          <UsersView path="/users" />
        </Router>
      </main>
    </UserProvider>
  );
}

export default App;
