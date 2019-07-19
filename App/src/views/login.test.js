import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login  from "./Login";
import { UserProvider } from "../contexts/user";

test("Login view", () => {
  const user = { name: "", email: "" };
  const setUser = jest.fn();

  const { asFragment } = render(
    <UserProvider user={user} setUser={setUser}>
      <Login />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();


});
