import React from "react";

function RequestFormAdmin({ onClick }) {
  return (
    <>
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
