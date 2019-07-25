/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import Modal from "react-modal";
import Calendar from "../components/Calendar";
import { useUser } from "../contexts/user";
import { createRequest } from "../services/request";

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
  const [newmotive, setMotive] = useState("");

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

  function handleCreateRequest(event) {
    event.preventDefault();
    const request = {
      creationDate: new Date(),
      requester_id: shiftsClicked[0].id,
      requested_id: shiftsClicked[1].id,
      date_Shift: shiftsClicked[1].date,
      rol: "FrontDesk",
      current_Shift_id: shiftsClicked[0].shift_id,
      requested_Shift_id: shiftsClicked[1].shift_id,
      motive: newmotive
    };

    try {
      createRequest(request).then(onRequestClose());
    } catch (error) {
      console.log(error.message);
    }
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
              value={newmotive}
              onChange={handleChangeMotive}
            />
          </label>
          <button type="button" onClick={handleCreateRequest}>
            Send
          </button>
          <button type="button" onClick={onRequestClear}>
            >Clear
          </button>
          <button type="button" onClick={onRequestClose}>
            Close
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default ScheduleModal;
