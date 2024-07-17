import { style } from "@vanilla-extract/css";
import { vars } from "../../tokens/global.css.ts";

export const container = style({
  padding: 24,
  gap: 8,
  borderRadius: 8,
  alignItems: "flex-start",
  border: `1px solid ${vars.token.border.default.default}`,
});

export const description = style({
  color: vars.token.text.default.secondary,
});

export const date = style({
  color: vars.token.text.default.default,
});
