import { createGlobalTheme } from "@vanilla-extract/css";
import { token } from "./color.css.ts";

export const vars = createGlobalTheme(":root", { token });
