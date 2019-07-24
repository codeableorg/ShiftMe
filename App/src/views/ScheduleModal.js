import React, { useState } from "react";
import Modal from "react-modal";
import Calendar from "../components/Calendar";
import { useUser } from "../contexts/user";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

function ScheduleModal({
  isOpen,
  onRequestClose,
  workShiftConcat,
  frontdesks,
  calcDay,
  start,
  end
}) {
  const user = useUser();

  const [shiftsClicked, setShiftsClicked] = useState([]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={isOpen}
    >
      <h2>Schudule Change</h2>
      {/* {JSON.stringify(shiftClicked)} */}
      {/* <button onClick={save}>Save</button> */}
      <Calendar
        workShiftConcat={workShiftConcat}
        frontdesks={frontdesks}
        calcDay={calcDay}
        start={start}
        end={end}
        shiftsClicked={shiftsClicked}
        saveShiftsClicked={setShiftsClicked}
      />
      <div>
        <form>
          <ul>
            {shiftsClicked.map(shift => (
              <li>{shift.id + shift.date + shift.shift_id}</li>
            ))}
          </ul>
          <label>
            Motive
            <textarea />
          </label>
          <button>Send</button>
          <button>Clear</button>
          <button onClick={onRequestClose}>Close</button>
        </form>
      </div>
    </Modal>
  );
}

export default ScheduleModal;
