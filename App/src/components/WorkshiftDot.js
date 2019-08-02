/** @jsx jsx */
import { jsx } from "@emotion/core";

export function WorkshiftDot({ title, shiftId }) {
  const backgroundColor =
    shiftId === 1
      ? "#F7C948"
      : shiftId === 2
      ? "#EF4E4E"
      : shiftId === 3
      ? "#3EBD93"
      : "#7B8794";
  return (
    <figure
      title={title}
      css={{
        margin: 0,
        display: "inline-block",
        borderRadius: "50%",
        width: "15px",
        height: "15px",
        backgroundColor
      }}
    />
  );
}
