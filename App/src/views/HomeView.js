/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { useState, useEffect } from "react";
import { Redirect } from "@reach/router";
import { useUser } from "../contexts/user";
import Navbar from "../components/Nabvar";
import ScheduleModal from "../components/ScheduleModal";
import NewScheduleModal from "../components/NewScheduleModal";
import schedules from "../services/schedule";
import { notifications } from "../services/notification";
import { users } from "../services/user";
import forecastsData from "../components/ForecastsData";
import { Button } from "../components/Ui";
import { WorkshiftDot } from "../components/WorkshiftDot";
import NewCalendar from "../components/NewCalendar";

import getInitialWeekDate from "../utils/get-initial-week-date";

function HomeView() {
  const [modalIsOpen, setModalOpen] = useState(false);
  const user = useUser();
  const [startDate, setStartDate] = useState(getInitialWeekDate());
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [events, setEvents] = useState([]);
  const [frontdesks, setFrontdesks] = useState([]);
  const forecasts = forecastsData();
  const [hasNotifications, setHasNotifications] = useState(false);

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

  useEffect(() => {
    async function fetchData() {
      const response = await notifications();
      setHasNotifications(response.has_notifications);
    }
    fetchData();
  }, []);

  if (!user) return <Redirect to="login" noThrow />;
  if (events.length === 0) return null;
  if (frontdesks.length === 0) return null;

  function handleNextClick() {
    const date = new Date(startDate);
    date.setDate(date.getDate() + 7);
    setStartDate(date);
  }

  function handleBackClick() {
    const date = new Date(startDate);
    date.setDate(date.getDate() - 7);
    setStartDate(date);
  }

  function handleTodayClick() {
    setStartDate(getInitialWeekDate());
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
    const nameDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var d = new Date(date);
    return nameDays[d.getDay()];
  }

  function handleShiftClick(event) {
    console.log(event.currentTarget.dataset);
  }

  return (
    <>
      <Navbar hasNotifications={hasNotifications} />
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
        <div css={{ overflow: "auto" }}>
          <header
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 15,
              marginTop: 85
            }}
          >
            <h1
              css={{
                color: "#35469C",
                fontSize: 36,
                margin: 0
              }}
            >
              Schedules
            </h1>
            <div css={{ display: "flex" }}>
              <div css={{ display: "flex", marginRight: 10 }}>
                <WorkshiftDot shiftId={1} />{" "}
                <span
                  css={{
                    color: "#F7C948",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 5
                  }}
                >
                  Morning
                </span>
              </div>
              <div css={{ display: "flex", marginRight: 10 }}>
                <WorkshiftDot shiftId={2} />{" "}
                <span
                  css={{
                    color: "#EF4E4E",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 5
                  }}
                >
                  Afternoon
                </span>
              </div>
              <div css={{ display: "flex", marginRight: 10 }}>
                <WorkshiftDot shiftId={3} />{" "}
                <span
                  css={{
                    color: "#3EBD93",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 5
                  }}
                >
                  Night
                </span>
              </div>
              <div css={{ display: "flex" }}>
                <WorkshiftDot shiftId={4} />{" "}
                <span
                  css={{
                    color: "#7B8794",
                    fontWeight: "bold",
                    fontSize: 14,
                    marginLeft: 5
                  }}
                >
                  Day Off
                </span>
              </div>
            </div>
          </header>
          <NewCalendar
            onPrev={handleBackClick}
            onNext={handleNextClick}
            onToday={handleTodayClick}
            // onShiftClick={handleShiftClick}
            startDate={startDate}
            workshiftList={workShiftConcat}
            forecast={forecastsConcat}
            users={frontdesks}
          />
        </div>
        <div
          css={{
            textAlign: "center",
            marginTop: "1em"
          }}
        >
          {/* <ScheduleModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalOpen(false)}
            workShiftConcat={workShiftConcat}
            frontdesks={frontdesks}
            calcDay={calcDay}
            start={start}
            end={end}
          /> */}
          <NewScheduleModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalOpen(false)}
            onPrev={handleBackClick}
            onNext={handleNextClick}
            onToday={handleTodayClick}
            startDate={startDate}
            workshiftList={workShiftConcat}
            forecast={forecastsConcat}
            users={frontdesks}
          />

          <Button onClick={handleChangeSchedule} css={{ width: "180px" }}>
            Change Schedule
          </Button>
        </div>
      </div>
    </>
  );
}

export default HomeView;
