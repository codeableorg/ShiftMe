import React from "react"

function RequestForm({onClick, handleCancel}) {
  return (
    <form>
      <button data-value="Agree" onClick={onClick}>
        Agree
      </button>
      <button data-value="Disagree" onClick={onClick}>
        Disagree
      </button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
}
export default RequestForm
