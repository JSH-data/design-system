import { style } from "@vanilla-extract/css";
import { vars } from "@css/vars.css";

export const container = style({
  justifyContent: "space-between",
});

export const tabWrapper = style({
  gap: 8,
});

export const tab = style({
  borderRadius: 8,
  padding: 8,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.token.background.brand.tertiary,
  },
});
