import React from "react"

function RequesterForm({handleCancel}) {
  return (
    <form>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  );
}
export default RequesterForm
