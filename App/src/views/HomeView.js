/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import Nabvar from "../components/Nabvar";
import ScheduleModal from "../components/ScheduleModal";
import schedules from "../services/schedule";
import { users } from "../services/user";

function HomeView() {
  const [modalIsOpen, setModalOpen] = useState(false);
  const user = useUser();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [events, setEvents] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);
  console.log(frontdesks);

  const forecasts = [
    {
      id: 1,
      month: "Julio",
      typeForecast: "Max-Occupancy",
      dataDays: [
        { date: "2019/07/01", data: 77.78 },
        { date: "2019/07/02", data: 79.23 },
        { date: "2019/07/03", data: 93.72 },
        { date: "2019/07/04", data: 87.92 },
        { date: "2019/07/05", data: 74.88 },
        { date: "2019/07/06", data: 54.42 },
        { date: "2019/07/07", data: 29.95 },
        { date: "2019/07/08", data: 77.78 },
        { date: "2019/07/09", data: 79.23 },
        { date: "2019/07/10", data: 93.72 },
        { date: "2019/07/11", data: 87.92 },
        { date: "2019/07/12", data: 74.88 },
        { date: "2019/07/13", data: 59.42 },
        { date: "2019/07/14", data: 29.95 },
        { date: "2019/07/15", data: 77.78 },
        { date: "2019/07/16", data: 79.23 },
        { date: "2019/07/17", data: 93.72 },
        { date: "2019/07/18", data: 87.92 },
        { date: "2019/07/19", data: 74.88 },
        { date: "2019/07/20", data: 54.42 },
        { date: "2019/07/21", data: 29.95 },
        { date: "2019/07/22", data: 59.42 },
        { date: "2019/07/23", data: 29.95 },
        { date: "2019/07/24", data: 87.92 },
        { date: "2019/07/25", data: 54.42 },
        { date: "2019/07/26", data: 77.78 },
        { date: "2019/07/27", data: 54.42 },
        { date: "2019/07/28", data: 59.42 },
        { date: "2019/07/29", data: 87.92 },
        { date: "2019/07/30", data: 59.42 },
        { date: "2019/07/31", data: 77.78 }
      ],
      created_at: "2019-07-13T00:32:07.485Z",
      updated_at: "2019-07-13T00:32:07.485Z"
    },
    {
      id: 2,
      month: "Julio",
      typeForecast: "Arrival-Rooms",
      dataDays: [
        { date: "2019/07/01", data: 36 },
        { date: "2019/07/02", data: 70 },
        { date: "2019/07/03", data: 60 },
        { date: "2019/07/04", data: 41 },
        { date: "2019/07/05", data: 31 },
        { date: "2019/07/06", data: 24 },
        { date: "2019/07/07", data: 10 },
        { date: "2019/07/08", data: 36 },
        { date: "2019/07/09", data: 70 },
        { date: "2019/07/10", data: 60 },
        { date: "2019/07/11", data: 41 },
        { date: "2019/07/12", data: 31 },
        { date: "2019/07/13", data: 24 },
        { date: "2019/07/14", data: 10 },
        { date: "2019/07/15", data: 31 },
        { date: "2019/07/16", data: 24 },
        { date: "2019/07/17", data: 36 },
        { date: "2019/07/18", data: 70 },
        { date: "2019/07/19", data: 60 },
        { date: "2019/07/20", data: 41 },
        { date: "2019/07/21", data: 31 },
        { date: "2019/07/22", data: 24 },
        { date: "2019/07/23", data: 10 },
        { date: "2019/07/24", data: 60 },
        { date: "2019/07/25", data: 41 },
        { date: "2019/07/26", data: 24 },
        { date: "2019/07/27", data: 60 },
        { date: "2019/07/28", data: 30 },
        { date: "2019/07/29", data: 41 },
        { date: "2019/07/30", data: 24 },
        { date: "2019/07/31", data: 31 }
      ],
      created_at: "2019-07-13T00:32:07.499Z",
      updated_at: "2019-07-13T00:32:07.499Z"
    }
  ];

  useEffect(() => {
    async function fetchData() {
      const response = await schedules.schedules();
      setEvents(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await users();
      setFrontdesks(response);
    }
    fetchData();
  }, []);

  if (!user) return <Redirect to="login" noThrow />;
  if (events.length === 0) return null;
  if (frontdesks.length === 0) return null;

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
    setModalOpen(true);
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

  const forecastsConcat = forecasts.reduce((groups, forecast) => {
    return {
      ...groups,
      [forecast.typeForecast]: groups[forecast.typeForecast]
        ? groups[forecast.typeForecast].concat(forecast.dataDays)
        : forecast.dataDays
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
          <h2 css={{ display: "flex", justifyContent: "center" }}>SCHEDULES</h2>
          <table css={tableCss}>
            <thead>
              <tr>
                <th css={thCss}>Frontdesk</th>
                {Object.entries(workShiftConcat)[0][1]
                  .slice(start, end)
                  .map(workSfhift => (
                    <th css={thCss} key={workSfhift.date}>
                      {calcDay(workSfhift.date)} {workSfhift.date}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(workShiftConcat).map(([userId, workShifts]) => (
                <tr key={userId}>
                  <td css={tdCss}>
                    {userId}-
                    {
                      frontdesks.find(
                        frontdesk => frontdesk.id === parseInt(userId)
                      ).name
                    }
                  </td>
                  {workShifts.slice(start, end).map((workShift, index) => (
                    <td css={tdCss} key={index}>
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
        <div>
          <h2 css={{ display: "flex", justifyContent: "center" }}>FORECAST</h2>
          <table css={tableCss}>
            <thead>
              <tr>
                <th css={thCss}>Type</th>
                {Object.entries(forecastsConcat)[0][1]
                  .slice(start, end)
                  .map((forecast, index) => (
                    <th css={thCss} key={index}>
                      {calcDay(forecast.date)} {forecast.date}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(forecastsConcat).map(
                ([typeForecast, dataDays]) => (
                  <tr key={typeForecast}>
                    <td css={tdCss}>{typeForecast}</td>
                    {dataDays.slice(start, end).map((dataDay, index) => (
                      <td css={tdCss} key={index}>
                        {dataDay.data}
                      </td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <div css={backNextCss}>
          <button onClick={handleClickBack}>Back</button>
          <button onClick={handleClickNext}>Next</button>
        </div>
        <div css={backNextCss}>
          <ScheduleModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalOpen(false)}
            workShiftConcat={workShiftConcat}
            frontdesks={frontdesks}
            calcDay={calcDay}
            start={start}
            end={end}
          />
          <button onClick={handleChangeSchedule}>Change Schedule</button>
        </div>
      </div>
    </>
  );
}

export default HomeView;
