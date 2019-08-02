/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Redirect } from "@reach/router";
import { useUser, useUserUpdater } from "../contexts/user";
import { login } from "../services/user";
import { Input, Card, Button } from "../components/Ui";

function Login() {
  const user = useUser();
  const userUpdater = useUserUpdater();
  const [email, setEmail] = React.useState("diego@gmail.com");
  const [password, setPassword] = React.useState("123456");
  const [error, setError] = React.useState(null);

  if (user) return <Redirect to="/" noThrow />;

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { name, id, rol } = await login({ email, password });
      userUpdater({ type: "LOGIN", payload: { name, email, id, rol } });
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <section css={{ display: "flex", alignItems: "center", height: "100vh" }}>
      <Card css={{ maxWidth: "500px", margin: "1em auto" }}>
        <h1 css={{ margin: "3rem 0", fontSize: "2rem", textAlign: "center" }}>
          ShiftMe
        </h1>
        <div styles={{ marginTop: "3rem", maxWidth: "500px", margin: "auto" }}>
          <form onSubmit={handleSubmit}>
            <fieldset css={{ border: "none", margin: "2em 0", padding: "0" }}>
              <label
                css={{ display: "block", margin: ".5rem 0" }}
                htmlFor="email"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </fieldset>
            <fieldset css={{ border: "none", margin: "1em 0", padding: "0" }}>
              <label
                css={{ display: "block", margin: ".5rem 0" }}
                htmlFor="password"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
            </fieldset>
            <Button>Log In</Button>
            {error && (
              <div css={{ color: "red", marginTop: "1rem" }}>
                Error: {error}
              </div>
            )}
          </form>
        </div>
      </Card>
    </section>
  );
}

export default Login;
