/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState } from "react";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import ScheduleModal from "../components/ScheduleModal";
import { WorkshiftDot } from "./WorkshiftDot";

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

  if (!user) return <Redirect to="login" noThrow />;

  const tableCss = {
    width: "80%",
    borderCollapse: "collapse",
    margin: "0 auto"
  };

  const thCss = {
    background: "#0D5C73",
    color: "white",
    fontWeight: "bolder",
    padding: 6,
    border: "1px solid #ccc",
    textAlign: "center"
  };

  const tdCss = {
    background: "#538898",
    color: "white",
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
          <table css={tableCss}>
            <thead>
              <tr>
                <th css={thCss}>Frontdesk</th>
                {Object.entries(workShiftConcat)[0][1]
                  .slice(start, end)
                  .map(workSfhift => (
                    <th css={thCss}>
                      {calcDay(workSfhift.date)} {workSfhift.date}
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
                              ? "green"
                              : "#538898"
                            : shiftsClicked.length > 0
                            ? shiftsClicked[0].date.replace(/-/g, "/") ==
                                workShift.date && shiftsClicked[0].id == userId
                              ? "green"
                              : "#538898"
                            : "#538898"
                      }}
                      data-id={userId}
                      data-date={workShift.date}
                      onClick={handleClick}
                      data-value={workShift.shift_id}
                    >
                      <WorkshiftDot shiftId={workShift.shift_id} />
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
