/* eslint-disable no-unused-expressions */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Button } from "./Ui";

function RequestForm({ onClick, handleCancel }) {
  return (
    <form>
            
      <Button css={{ width: "60px", height: "40px", margin: "3px" }} data-value="Agree" onClick={onClick}>
        Agree
      </Button>
      <Button css={{ width: "80px", height: "40px", margin: "3px" }} data-value="Disagree" onClick={onClick}>
        Disagree
      </Button>
      <Button css={{ width: "60px", height: "40px", margin: "3px" }} onClick={handleCancel}>Cancel</Button>
    </form>
  );
}
export default RequestForm;
