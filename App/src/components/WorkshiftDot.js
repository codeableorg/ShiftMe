/** @jsx jsx */
import { jsx } from "@emotion/core";

<<<<<<< HEAD
export function WorkshiftDot({ title, shiftId, size = "medium" }) {
=======
export function WorkshiftDot({ title, shiftId }) {
>>>>>>> Create colored dot for workshifts
  const backgroundColor =
    shiftId === 1
      ? "#F7C948"
      : shiftId === 2
      ? "#EF4E4E"
      : shiftId === 3
      ? "#3EBD93"
<<<<<<< HEAD
      : shiftId === 4
      ? "#7B8794"
      : "#BED0F7";
=======
      : "#7B8794";
>>>>>>> Create colored dot for workshifts
  return (
    <figure
      title={title}
      css={{
        margin: 0,
        display: "inline-block",
        borderRadius: "50%",
<<<<<<< HEAD
        width: size === "medium" ? 15 : 10,
        height: size === "medium" ? 15 : 10,
=======
        width: "15px",
        height: "15px",
>>>>>>> Create colored dot for workshifts
        backgroundColor
      }}
    />
  );
}
