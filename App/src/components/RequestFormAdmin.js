/* eslint-disable no-unused-expressions */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Button } from "./Ui";

function RequestFormAdmin({ onClick, request, frontdesks, events }) {
  return (
      <form>
        <Button css={{ width: "80px", height: "40px", margin: "3px" }}  data-value="Accepted" onClick={onClick}>
          Accepted
        </Button>
        <Button css={{ width: "80px", height: "40px", margin: "3px" }}  data-value="Rejected" onClick={onClick}>
          Rejected
        </Button>
      </form>
  );
}
export default RequestFormAdmin;
