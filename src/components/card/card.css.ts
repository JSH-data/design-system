import { style } from "@vanilla-extract/css";
import { vars } from "@css/vars.css";
import { defaultBorderStyle } from "@tokens";

export const container = style({
  padding: 24,
  gap: 8,
  alignItems: "flex-start",
  ...defaultBorderStyle,
  borderRadius: 8,
  border: `1px solid ${vars.token.border.default.default}`,
});

export const description = style({
  color: vars.token.text.default.secondary,
});

export const date = style({
  color: vars.token.text.default.default,
});
