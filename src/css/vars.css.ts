import { createGlobalTheme } from "@vanilla-extract/css";
import { token } from "./color.css";

export const vars = createGlobalTheme(":root", { token });
