/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import Nabvar from "../components/Nabvar";
function HomeView() {
  const user = useUser();
  if (!user) return <Redirect to="login" noThrow />;
  return (
    <>
      <Nabvar />
      <h1>SOy el HOme</h1>
    </>
  );
}

export default HomeView;
