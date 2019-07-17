/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import Nabvar from "../components/Nabvar";
import schedules from "../services/schedule";

function HomeView() {
  const user = useUser();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    schedules.schedules().then(schedule => {
      setEvents(schedule);
    });
  }, []);

  if (!user) return <Redirect to="login" noThrow />;
  if (events.length === 0) return null;

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

  function handleClickNext(event) {
    event.preventDefault();
    setStart(start + 7);
    setEnd(end + 7);
  }

  function handleClickBack(event) {
    event.preventDefault();
    setStart(start - 7);
    setEnd(end - 7);
  }

  function handleChangeSchedule(event) {
    event.preventDefault();
  }

  const workShiftConcat = events.reduce((groups, event) => {
    return {
      ...groups,
      [event.user_id]: groups[event.user_id]
        ? groups[event.user_id].concat(event.workShifts)
        : event.workShifts
    };
  }, {});

  function calcDay(date) {
    const nameDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurday",
      "Friday",
      "Saturday"
    ];
    var d = new Date(date);
    return nameDays[d.getDay()];
  }

  return (
    <>
      <Nabvar />
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
                  <td css={tdCss}>{userId}</td>
                  {workShifts.slice(start, end).map(workShift => (
                    <td css={tdCss}>
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
          <button onClick={handleClickBack}>Back</button>
          <button onClick={handleClickNext}>Next</button>
        </div>
        <div css={backNextCss}>
          <button onClick={handleChangeSchedule}>Change Schedule</button>
        </div>
      </div>
    </>
  );
}

export default HomeView;
