/** @jsx jsx */
import { Fragment } from "react";
import { jsx } from "@emotion/core";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { WorkshiftDot } from "./WorkshiftDot";
import format from "date-fns/format";

function TH({ styles, ...props }) {
  return (
    <th
      {...props}
      css={{
        background: "#35469C",
        color: "#BED0F7",
        fontWeight: "500",
        fontSize: 14,
        padding: 15,
        border: "none",
        textAlign: "center",
        ...styles
      }}
    />
  );
}

function TD({ styles, ...props }) {
  return (
    <td
      {...props}
      css={{
        background: "white",
        color: "#35469C",
        fontWeight: "bold",
        padding: 15,
        border: "none",
        textAlign: "center",
        ...styles
      }}
    />
  );
}

function ArrowButton({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        background: "none",
        border: "none",
        color: "#BED0F7",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        padding: 0,
        width: 20,
        height: 20,
        outline: "none",
        "&:hover": {
          color: "white"
        },
        ...styles
      }}
    />
  );
}

function formatDateTitle(startDate, endDate) {
  const startMonth = startDate.getMonth();
  const endMonth = endDate.getMonth();

  if (startMonth === endMonth) {
    return format(startDate, "MMMM YYYY");
  }

  const startYear = format(startDate, "YYYY");
  const endYear = format(endDate, "YYYY");

  if (startYear === endYear) {
    return `${format(startDate, "MMM")} - ${format(
      endDate,
      "MMM"
    )} ${startYear}`;
  }

  return `${format(startDate, "MMM YYYY")} - ${format(endDate, "MMM YYYY")}`;
}

/**
 * This component receive the props listed below
 */
function NewCalendar({
  onPrev,
  onNext,
  onToday,
  onShiftClick,
  startDate = new Date(),
  workshiftList,
  forecast,
  users,
  selectedUsers = [],
  selectedDate = null
}) {
  const dates = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return date;
  });

  return (
    <table
      css={{
        background: "white",
        width: "100%",
        borderCollapse: "collapse",
        margin: "0 auto"
      }}
    >
      <thead>
        <tr>
          <TH
            styles={{
              width: 245,
              textAlign: "left",
              verticalAlign: "middle",
              boxSizing: "border-box"
            }}
          >
            <div css={{ display: "flex", alignItems: "center" }}>
              {onPrev && (
                <ArrowButton onClick={onPrev} title="Move to the previous week">
                  <FaChevronLeft />
                </ArrowButton>
              )}
              {onToday && (
                <ArrowButton
                  onClick={onToday}
                  styles={{ paddingLeft: 0, paddingRight: 0 }}
                  title="Go back to the current week"
                >
                  <WorkshiftDot size="small" />
                </ArrowButton>
              )}
              {onNext && (
                <ArrowButton onClick={onNext} title="Move to the next week">
                  <FaChevronRight />
                </ArrowButton>
              )}
              <span css={{ marginLeft: 15, display: "inline-block" }}>
                {formatDateTitle(dates[0], dates[dates.length - 1])}
              </span>
            </div>
          </TH>
          {dates.map(date => (
            <TH>{format(date, "ddd DD")}</TH>
          ))}
        </tr>
      </thead>
      <tbody>
        {forecast && (
          <Fragment>
            {workshiftList && (
              <tr>
                <td
                  colSpan={8}
                  css={{
                    backgroundColor: "#7B93DB",
                    color: "white",
                    textTransform: "uppercase",
                    padding: "5px 20px",
                    fontSize: 12
                  }}
                >
                  {Object.entries(forecast).length === 0
                    ? "Loading Forecast data..."
                    : "Forecast"}
                </td>
              </tr>
            )}
            {Object.entries(forecast).map(([forecastType, dataDays]) => {
              const startIndex = dataDays.findIndex(
                datum => datum.date === format(startDate, "YYYY/MM/DD")
              );
              return (
                <tr key={forecastType}>
                  <TD styles={{ textAlign: "left", minWidth: "180px" }}>
                    {forecastType}
                  </TD>
                  {dataDays
                    .slice(startIndex, startIndex + 7)
                    .map((dataDay, index) => (
                      <TD key={dataDay.date}>{dataDay.data}</TD>
                    ))}
                </tr>
              );
            })}
          </Fragment>
        )}

        {workshiftList && (
          <Fragment>
            {forecast && (
              <tr>
                <td
                  colSpan={8}
                  css={{
                    backgroundColor: "#7B93DB",
                    color: "white",
                    textTransform: "uppercase",
                    padding: "5px 20px",
                    fontSize: 12
                  }}
                >
                  {Object.entries(workshiftList).length === 0
                    ? "Loading Shifts..."
                    : "Shifts"}
                </td>
              </tr>
            )}
            {Object.entries(workshiftList).map(
              ([userId, workShiftsPerUser]) => {
                const startIndex = workShiftsPerUser.findIndex(
                  workShift =>
                    workShift.date === format(startDate, "YYYY/MM/DD")
                );

                const user = users.find(
                  user => user.id === parseInt(userId, 10)
                );
                if (!user) return null;

                const isSelectedUser = selectedUsers.includes(user.id);
                const workshifts = workShiftsPerUser.slice(
                  startIndex,
                  startIndex + 7
                );
                return (
                  <tr key={userId}>
                    <TD styles={{ textAlign: "left", minWidth: "180px" }}>
                      {user && user.name}
                    </TD>
                    {workshifts.map((workShift, index) => (
                      <TD
                        key={workShift.date}
                        styles={{
                          backgroundColor:
                            isSelectedUser &&
                            format(new Date(workShift.date), "YYYY-MM-DD") ===
                              format(new Date(selectedDate), "YYYY-MM-DD")
                              ? "#35469C"
                              : "white"
                        }}
                      >
                        {onShiftClick ? (
                          <button
                            css={{
                              background: "none",
                              border: "none",
                              cursor: "pointer"
                            }}
                            onClick={onShiftClick}
                            title="Select this shift"
                            data-userId={userId}
                            data-date={workShift.date}
                            data-shiftId={workShift.shift_id}
                          >
                            <WorkshiftDot
                              title={workShift.date}
                              shiftId={workShift.shift_id}
                            />
                          </button>
                        ) : (
                          <WorkshiftDot
                            title={workShift.date}
                            shiftId={workShift.shift_id}
                          />
                        )}
                      </TD>
                    ))}
                  </tr>
                );
              }
            )}
          </Fragment>
        )}
      </tbody>
    </table>
  );
}

export default NewCalendar;
