/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import Nabvar from "../components/Nabvar";
import ScheduleModal from "../components/ScheduleModal";
import schedules from "../services/schedule";
import { users } from "../services/user";
import forecastsData from "../components/ForecastsData";
import { Button } from "../components/Ui";

function HomeView() {
  const [modalIsOpen, setModalOpen] = useState(false);
  const user = useUser();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [events, setEvents] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);
  const forecasts = forecastsData();

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
    background: "#f4f5f7",
    color: "#59616b",
    fontWeight: "bolder",
    padding: "18px",
    border: "1px solid #ccc",
    textAlign: "center"
  };

  const tdCss = {
    background: "#ffffff",
    color: "#253858",
    fontWeight: "400",
    padding: 6,
    border: "1px solid #ccc",
    textAlign: "center"
  };

  const backNextCss = {
    textAlign: "center",
    marginTop: "1em"
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
      <div
        css={{
          maxWidth: "1000px",
          margin: "0 auto",
          boxSizing: "border-box",
          marginBottom: "80px",
          "@media (max-width: 720px)": {
            padding: "0px 15px"
          }
        }}
      >
        <div
          css={{
            overflow: "auto"
          }}
        >
          <h2 css={{ display: "flex", justifyContent: "center" }}>SCHEDULES</h2>
          <table css={tableCss}>
            <thead>
              <tr>
                <th css={thCss}>Frontdesk</th>
                {Object.entries(workShiftConcat)[0][1]
                  .slice(start, end)
                  .map(workShift => (
                    <th css={thCss} key={workShift.date}>
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
                <tr key={userId}>
                  <td css={tdCss}>
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
        <div
          css={{
            overflow: "auto"
          }}
        >
          <h2 css={{ display: "flex", justifyContent: "center" }}>FORECAST</h2>
          <table css={tableCss}>
            <thead>
              <tr>
                <th css={thCss}>Type</th>
                {Object.entries(forecastsConcat)[0][1]
                  .slice(start, end)
                  .map((forecast, index) => (
                    <th css={thCss} key={index}>
                      {calcDay(forecast.date)}{" "}
                      <span css={{ fontSize: "12px", fontWeight: "400" }}>
                        {forecast.date}
                      </span>
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
          <Button
            onClick={handleClickBack}
            css={{
              width: "75px",
              marginRight: "10px",
              width: "100px",
              textAlign: "center",
              backgroundColor: "#ffffff",
              borderColor: "#136ccd",
              color: "#136ccd"
            }}
          >
            Back
          </Button>
          <Button
            onClick={handleClickNext}
            css={{
              width: "75px",
              textAlign: "center",
              backgroundColor: "#ffffff",
              width: "100px",
              borderColor: "#136ccd",
              color: "#136ccd"
            }}
          >
            Next
          </Button>
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
          <Button
            onClick={handleChangeSchedule}
            css={{
              width: "210px",
              backgroundColor: "#136ccd",
              border: "1px solid #e5edef",
              color: "white",
              borderRadius: "0.25rem",
              padding: ".75rem 2.25rem"
            }}
          >
            Change Schedule
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomeView;
