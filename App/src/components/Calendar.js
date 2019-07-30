/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import ScheduleModal from "../components/ScheduleModal";

function Calendar({
  workShiftConcat,
  frontdesks,
  calcDay,
  start,
  end,
  shiftsClicked,
  saveShiftsClicked
}) {
  const [modalIsOpen, setModalOpen] = useState(false);
  const user = useUser();
  console.log(shiftsClicked);

  if (!user) return <Redirect to="login" noThrow />;

  const tableCss = {
    width: "80%",
    borderCollapse: "collapse",
    margin: "0 auto"
  };

  const thCss = {
    background: "#f4f5f7",
    color: "#59616b",
    fontWeight: "bold",
    padding: 6,
    border: "1px solid #ccc",
    textAlign: "center"
  };

  const tdCss = {
    background: "#ffffff",
    color: "#59616b",
    fontWeight: "bold",
    padding: 6,
    border: "1px solid #ccc",
    textAlign: "center"
  };

  const backNextCss = {
    display: "flex",
    justifyContent: "center"
  };

  function handleClick(event) {
    event.preventDefault();
    if (shiftsClicked.length < 2) {
      if (shiftsClicked.length === 0) {
        if (+event.target.dataset.id === user.id) {
          event.target.style.background = "#79f2c0";
          saveShiftsClicked([
            ...shiftsClicked,
            {
              id: event.target.dataset.id,
              date: event.target.dataset.date,
              shift_id: event.target.dataset.value
            }
          ]);
        } else {
          alert("First select your shift");
        }
      } else if (
        shiftsClicked[0].date === event.target.dataset.date &&
        shiftsClicked[0].id !== event.target.dataset.id
      ) {
        saveShiftsClicked([
          ...shiftsClicked,
          {
            id: event.target.dataset.id,
            date: event.target.dataset.date,
            shift_id: event.target.dataset.value
          }
        ]);
      } else if (
        shiftsClicked[0].date === event.target.dataset.date &&
        shiftsClicked[0].id === event.target.dataset.id
      ) {
        saveShiftsClicked([]);
      }
    }
  }

  return (
    <>
      <div>
        <div>
          <h2 css={{ display: "flex", justifyContent: "center" }}>SCHEDULES</h2>
          <table css={tableCss}>
            <thead>
              <tr>
                <th css={thCss}>Frontdesk</th>
                {Object.entries(workShiftConcat)[0][1]
                  .slice(start, end)
                  .map(workShift => (
                    <th css={thCss}>
                      {calcDay(workShift.date)}{" "}
                      <span css={{ fontSize: "12px", fontWeight: "400" }}>
                        {workShift.date}
                      </span>
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(workShiftConcat).map(([userId, workShifts]) => (
                <tr>
                  <td css={tdCss}>
                    {
                      frontdesks.find(
                        frontdesk => frontdesk.id === parseInt(userId)
                      ).name
                    }
                  </td>
                  {workShifts.slice(start, end).map(workShift => (
                    <td
                      key={workShift.date}
                      id={workShift.date}
                      css={{
                        ...tdCss,
                        background:
                          shiftsClicked.length > 1
                            ? shiftsClicked[0].date.replace(/-/g, "/") ==
                                workShift.date &&
                              (shiftsClicked[0].id == userId ||
                                shiftsClicked[1].id == userId)
                              ? "#79f2c0"
                              : "#ffffff"
                            : "#ffffff"
                      }}
                      data-id={userId}
                      data-date={workShift.date}
                      onClick={handleClick}
                      data-value={workShift.shift_id}
                    >
                      {workShift.shift_id === 4
                        ? "OFF"
                        : workShift.shift_id === 1
                        ? "M"
                        : workShift.shift_id === 2
                        ? "T"
                        : "N"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div css={backNextCss}>
          <ScheduleModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalOpen(false)}
          />
        </div>
      </div>
    </>
  );
}

export default Calendar;
