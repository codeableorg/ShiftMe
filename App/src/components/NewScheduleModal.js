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

  const [shiftsClicked, setShiftsClicked] = useState([]);
  const [newMotive, setMotive] = useState("");

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
    // width: "70%",
    // marginLeft: "5px"
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
      alert("Must add a motive");
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

    try {
      createRequest(request)
        .then(() => clear())
        .then(() => onRequestClose());
    } catch (error) {
      console.log(error.message);
    }
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
        } else {
          alert("First select your shift");
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
      } else if (
        shiftsClicked[0].date === event.currentTarget.dataset.date &&
        shiftsClicked[0].id === event.currentTarget.dataset.userid
      ) {
        setShiftsClicked([]);
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
            Schudule Change
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
          shiftsClicked={shiftsClicked}
        />
        <div>
          <form css={formCss}>
            <ul css={listCss}>
              {shiftsClicked.map(shift => (
                <li>
                  {nameFrontDesk(shift.id) +
                    " of shift " +
                    shift.shift_id +
                    " of date " +
                    shift.date}
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
    </Modal>
  );
}

export default NewScheduleModal;
