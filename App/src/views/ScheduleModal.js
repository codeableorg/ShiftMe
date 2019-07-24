/* eslint-disable no-unused-expressions */
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
  const [motive, setMotive] = useState("");
  console.log("motivo", motive);

  function nameFrontDesk(userId) {
    return frontdesks.find(frontdesk => frontdesk.id === parseInt(userId)).name;
  }

  function onRequestClear(event) {
    event.preventDefault();
    setShiftsClicked([]);
    setMotive("");
  }

  function handleChangeMotive(event) {
    setMotive(event.target.value);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={isOpen}
    >
      <h2>Schudule Change</h2>
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
              <li>
                {nameFrontDesk(shift.id) +
                  " of shift " +
                  shift.shift_id +
                  "of date " +
                  shift.date}
              </li>
            ))}
          </ul>
          <label>
            Motive
            <textarea
              type="text"
              value={motive}
              onChange={handleChangeMotive}
            />
          </label>
          <button>Send</button>
          <button onClick={onRequestClear}>>Clear</button>
          <button onClick={onRequestClose}>Close</button>
        </form>
      </div>
    </Modal>
  );
}

export default ScheduleModal;
