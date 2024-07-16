import { Box, BoxProps } from "./box";
import { columnBox, rowBox } from "./flex-box.css";
import clsx from "clsx";

type FlexBoxProps = BoxProps & {
  direction?: "row" | "column";
};

export function FlexBox({
  direction = "row",
  className,
  ...rest
}: FlexBoxProps) {
  return (
    <Box
      as="div"
      className={clsx(className, direction === "row" ? rowBox : columnBox)}
      {...rest}
    ></Box>
  );
}
