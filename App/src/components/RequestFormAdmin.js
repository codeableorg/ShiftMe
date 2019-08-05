import React from "react";
import NewCalendar from "./NewCalendar";

function RequestFormAdmin({ onClick, workshiftList, users, forecast, startDate }) {
  return (
    <>
      <NewCalendar
        workshiftList={workshiftList}
        users={users}
        forecast={forecast}
        startDate={startDate}
      />
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
