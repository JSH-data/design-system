import { createElement, AllHTMLAttributes, ElementType } from "react";
import clsx, { ClassValue } from "clsx";

type HTMLProperties = Omit<
  AllHTMLAttributes<HTMLElement>,
  "as" | "className" | "color" | "height" | "width"
>;

type BoxProps = HTMLProperties & {
  as?: ElementType;
  className?: ClassValue;
};

export function Box({ as = "div", className, ...rest }: BoxProps) {
  return createElement(as, {
    className: clsx(className),
    ...rest,
  });
}
