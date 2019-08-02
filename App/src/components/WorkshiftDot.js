/** @jsx jsx */
import { jsx } from "@emotion/core";

<<<<<<< HEAD
<<<<<<< HEAD
export function WorkshiftDot({ title, shiftId, size = "medium" }) {
=======
export function WorkshiftDot({ title, shiftId }) {
>>>>>>> Create colored dot for workshifts
=======
export function WorkshiftDot({ title, shiftId, size = "medium" }) {
>>>>>>> Update WorkshiftDot to support a default color and a size
  const backgroundColor =
    shiftId === 1
      ? "#F7C948"
      : shiftId === 2
      ? "#EF4E4E"
      : shiftId === 3
      ? "#3EBD93"
<<<<<<< HEAD
<<<<<<< HEAD
      : shiftId === 4
      ? "#7B8794"
      : "#BED0F7";
=======
      : "#7B8794";
>>>>>>> Create colored dot for workshifts
=======
      : shiftId === 4
      ? "#7B8794"
      : "#BED0F7";
>>>>>>> Update WorkshiftDot to support a default color and a size
  return (
    <figure
      title={title}
      css={{
        margin: 0,
        display: "inline-block",
        borderRadius: "50%",
<<<<<<< HEAD
<<<<<<< HEAD
        width: size === "medium" ? 15 : 10,
        height: size === "medium" ? 15 : 10,
=======
        width: "15px",
        height: "15px",
>>>>>>> Create colored dot for workshifts
=======
        width: size === "medium" ? 15 : 10,
        height: size === "medium" ? 15 : 10,
>>>>>>> Update WorkshiftDot to support a default color and a size
        backgroundColor
      }}
    />
  );
}
