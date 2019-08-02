/** @jsx jsx */
import { jsx } from "@emotion/core";

export function WorkshiftDot({ title, shiftId, size = "medium" }) {
  const backgroundColor =
    shiftId === 1
      ? "#F7C948"
      : shiftId === 2
      ? "#EF4E4E"
      : shiftId === 3
      ? "#3EBD93"
      : shiftId === 4
      ? "#7B8794"
      : "#BED0F7";
  return (
    <figure
      title={title}
      css={{
        margin: 0,
        display: "inline-block",
        borderRadius: "50%",
        width: size === "medium" ? 15 : 10,
        height: size === "medium" ? 15 : 10,
        backgroundColor
      }}
    />
  );
}
