import React from "react";
import PreviewWeek from "./PreviewWeek";

function RequestFormAdmin({ onClick, request, frontdesks, events }) {
  return (
    <>
      <PreviewWeek request={request} frontdesks={frontdesks} events={events} />
      <form>
        <button data-value="Accepted" onClick={onClick}>
          Accepted
        </button>
        <button data-value="Rejected" onClick={onClick}>
          Rejected
        </button>
      </form>
    </>
  );
}
export default RequestFormAdmin;
