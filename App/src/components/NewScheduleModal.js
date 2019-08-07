/* eslint-disable no-unused-expressions */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import Modal from "react-modal";
import Calendar from "./Calendar";
import { useUser } from "../contexts/user";
import { createRequest } from "../services/request";
import NewCalendar from "../components/NewCalendar";
import { Button } from "../components/Ui";
import Alert from "../components/Alert";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)"
  }
};

function NewScheduleModal({
  isOpen,
  onRequestClose,
  onShiftClick,
  onPrev,
  onNext,
  onToday,
  startDate,
  workshiftList,
  forecast,
  users
}) {
  const user = useUser();
  const [alert, setAlert] = useState("");
  const [shiftsClicked, setShiftsClicked] = useState([]);
  const [newMotive, setMotive] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedDate, setSelectedDate] = useState();

  const Turn = {
    1: "Morning",
    2: "Afternoon",
    3: "Night",
    4: "Day Off"
  };

  const cancel = {
    fontSize: "2em",
    cursor: "pointer",
    color: "#19216C",
    fontWeight: "bolder",
    "&:hover": {
      color: "#4055A8"
    }
  };

  const container = {
    display: "flex",
    flexDirection: "column"
  };

  const head = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  };

  const footer = {
    display: "flex",
    justifyContent: "flex-end"
  };

  const textareaCss = {
    rows: 4,
    cols: 50,
    color: "#35469C",
    border: "1px solid #35469C"
  };

  const listCss = {
    listStyleType: "none",
    padding: 0,
    color: "#35469C"
  };

  const formCss = {
    display: "flex",
    flexDirection: "column"
  };

  function nameFrontDesk(userId) {
    return users.find(frontdesk => frontdesk.id === parseInt(userId)).name;
  }

  function clear() {
    setShiftsClicked([]);
    setSelectedUsers([]);
    setSelectedDate();
    setMotive("");
  }

  function onRequestClear(event) {
    event.preventDefault();
    clear();
  }
  function onClose(event) {
    event.preventDefault();
    clear();
    onRequestClose();
  }

  function handleChangeMotive(event) {
    setMotive(event.target.value);
  }

  function handleCreateRequest(event) {
    event.preventDefault();
    if (!newMotive || shiftsClicked.length < 2) {
      if (shiftsClicked.length < 2) {
        setAlert("Must select min 2 shifts");
      } else {
        setAlert("Must add a motive");
      }
      return;
    }
    const request = {
      creationDate: new Date(),
      requester_id: shiftsClicked[0].id,
      requested_id: shiftsClicked[1].id,
      date_Shift: shiftsClicked[1].date,
      current_Shift_id: shiftsClicked[0].shift_id,
      requested_Shift_id: shiftsClicked[1].shift_id,
      motive: newMotive
    };

    createRequest(request)
      .then(() => {
        clear();
        onRequestClose();
      })
      .catch(error => {
        setAlert(`Error happened at the time of creation:  ${error.message}`);
      });
  }

  function handleShiftClick(event) {
    event.preventDefault();
    if (shiftsClicked.length < 2) {
      if (shiftsClicked.length === 0) {
        if (+event.currentTarget.dataset.userid === user.id) {
          setShiftsClicked([
            ...shiftsClicked,
            {
              id: event.currentTarget.dataset.userid,
              date: event.currentTarget.dataset.date,
              shift_id: event.currentTarget.dataset.shiftid
            }
          ]);
          setSelectedUsers([
            Alert,
            ...selectedUsers,
            parseInt(event.currentTarget.dataset.userid, 10)
          ]);
          setSelectedDate(event.currentTarget.dataset.date);
        } else {
          setAlert("First select your shift");
        }
      } else if (
        shiftsClicked[0].date === event.currentTarget.dataset.date &&
        shiftsClicked[0].id !== event.currentTarget.dataset.userid
      ) {
        setShiftsClicked([
          ...shiftsClicked,
          {
            id: event.currentTarget.dataset.userid,
            date: event.currentTarget.dataset.date,
            shift_id: event.currentTarget.dataset.shiftid
          }
        ]);
        setSelectedUsers([
          ...selectedUsers,
          parseInt(event.currentTarget.dataset.userid, 10)
        ]);
        setSelectedDate(event.currentTarget.dataset.date);
      } else if (
        shiftsClicked[0].date === event.currentTarget.dataset.date &&
        shiftsClicked[0].id === event.currentTarget.dataset.userid
      ) {
        setShiftsClicked([]);
        setSelectedUsers([]);
        setSelectedDate();
      }
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
      <div css={container}>
        <div css={head}>
          <h2
            css={{
              color: "#35469C",
              fontSize: 25,
              margin: 0
            }}
          >
            Request a schedule change
          </h2>
          <span
            onClick={onClose}
            css={cancel}
            aria-label="Close schedule modal"
          >
            &times;
          </span>
        </div>
        <NewCalendar
          onPrev={onPrev}
          onNext={onNext}
          onToday={onToday}
          onShiftClick={handleShiftClick}
          startDate={startDate}
          workshiftList={workshiftList}
          users={users}
          selectedUsers={selectedUsers}
          selectedDate={selectedDate}
        />
        <div>
          <form css={formCss}>
            <ul css={listCss}>
              {shiftsClicked.map(shift => (
                <li>
                  <b>{nameFrontDesk(shift.id)}</b> of shift{" "}
                  <b>{Turn[shift.shift_id]}</b> of date {shift.date}
                </li>
              ))}
            </ul>
            <div css={{ display: "flex", flexDirection: "column" }}>
              <span
                css={{
                  color: "#35469C",
                  fontSize: 18,
                  margin: 0,
                  fontWeight: "bold"
                }}
              >
                {" "}
                Motive:{" "}
              </span>
              <textarea
                css={textareaCss}
                type="text"
                value={newMotive}
                onChange={handleChangeMotive}
              />
            </div>
          </form>
        </div>
        <div css={footer}>
          <Button
            type="button"
            onClick={onRequestClear}
            css={{ width: "60px", height: "40px", margin: "3px" }}
          >
            Clear
          </Button>
          <Button
            type="button"
            onClick={handleCreateRequest}
            css={{ width: "60px", height: "40px", margin: "3px" }}
          >
            Send
          </Button>
        </div>
      </div>
      {alert && <Alert message={alert} onClose={() => setAlert("")} />}
    </Modal>
  );
}

export default NewScheduleModal;
