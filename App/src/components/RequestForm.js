/* eslint-disable no-unused-expressions */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Button } from "./Ui";
import { useUser } from "../contexts/user";

function RequestForm({ onClick, handleCancel, requesterId }) {
  const user = useUser();
  return (
    <form>
      {requesterId === user.id ? (
        <Button
          css={{ width: "60px", height: "40px", margin: "3px" }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      ) : (
        <>
          <Button
            css={{ width: "60px", height: "40px", margin: "3px" }}
            data-value="Agree"
            onClick={onClick}
          >
            Agree
          </Button>
          <Button
            css={{ width: "80px", height: "40px", margin: "3px" }}
            data-value="Disagree"
            onClick={onClick}
          >
            Disagree
          </Button>
        </>
      )}
    </form>
  );
}
export default RequestForm;
