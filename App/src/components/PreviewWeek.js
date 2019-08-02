/** @jsx jsx */
import { jsx } from "@emotion/core";
import dateFns from "date-fns";

function PreviewWeek({ request, frontdesks, events }) {
  if (!request) return null;
  const cursor = dateFns.format(request.date_Shift, "YYYY/MM/DD");
  const init = dateFns.startOfWeek(dateFns.subDays(cursor, 1));

  const datesWeek = Array.from(Array(7).keys()).map((_, index) => {
    return dateFns.format(dateFns.addDays(init, index + 1), "YYYY/MM/DD");
  }); // day of week, init in monday and end in sunday

  const names = frontdesks.filter(
    user => user.id === request.requester_id || user.id === request.requested_id
  );

  const shifts = {
    1: "M",
    2: "A",
    3: "N",
    4: "OFF"
  };

  function findShift(date, userId) {
    const findMonth = events.find(
      item =>
        item.month === dateFns.format(date, "MMMM") && item.user_id === userId
    );

    if (!findMonth) return "";

    const findDay = findMonth.workShifts.find(day => date === day.date);
    return shifts[findDay.shift_id];
  }

  const styleRow = {
    display: "flex"
  };

  const styleDay = {
    background: "#0D5C73",
    padding: "10px",
    border: "1px solid #ccc",
    flex: 1,
    fontWeight: 700,
    color: "#fff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "85px"
  };

  const styleCell = {
    ...styleDay,
    background: "#538898"
  };

  return (
    <div css={{ maxWidth: "900px", margin: "auto" }}>
      <div css={styleRow}>
        <div css={styleDay}>FrontDesk</div>
        {datesWeek.map(date => (
          <div key={date} css={styleDay}>
            <div>{dateFns.format(date, "dddd")}</div>
            <div>{date}</div>
          </div>
        ))}
      </div>
      {names.map(user => (
        <div css={styleRow} key={user.id}>
          <div css={styleCell}>{user.name}</div>
          {datesWeek.map(date => (
            <div
              key={date}
              css={{
                ...styleCell,
                background: cursor === date ? "green" : "#538898"
              }}
            >
              {findShift(date, user.id)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default PreviewWeek;
