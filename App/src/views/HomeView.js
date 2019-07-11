/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";

function HomeView() {
  const user = useUser();
  if (!user) return <Redirect to="login" noThrow />;

  return <h1>Soy el Home</h1>;
}

export default HomeView;
