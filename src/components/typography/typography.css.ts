import { styleVariants } from "@vanilla-extract/css";

const typoWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
  extraBlack: 900,
};

const typoScale = {
  scale01: 12,
  scale02: 16,
  scale03: 20,
  scale04: 24,
  scale05: 32,
  scale06: 40,
  scale07: 48,
  scale08: 64,
  scale09: 72,
  scale10: 100,
};

export const typoVariants = styleVariants({
  titleHero: {
    fontSize: typoScale["scale10"],
    fontWeight: typoWeight["bold"],
  },
  titlePage: {
    fontSize: typoScale["scale08"],
    fontWeight: typoWeight["bold"],
  },
  subtitle: {
    fontSize: typoScale["scale06"],
    fontWeight: typoWeight["regular"],
  },
  heading: {
    fontSize: typoScale["scale05"],
    fontWeight: typoWeight["semibold"],
  },
  subHeading: {
    fontSize: typoScale["scale04"],
    fontWeight: typoWeight["regular"],
  },
  body: {
    fontSize: typoScale["scale03"],
    fontWeight: typoWeight["regular"],
  },
});

export type variantType = keyof typeof typoVariants;
