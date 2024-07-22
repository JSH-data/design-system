import { createGlobalTheme } from "@vanilla-extract/css";
import { token } from "@tokens";

export const vars = createGlobalTheme(":root", { token });
