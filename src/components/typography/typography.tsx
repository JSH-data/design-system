import { Box } from "../box";
import { ReactNode } from "react";
import { typoVariants, variantType } from "./typography.css";
import { vars } from "../../tokens/global.css.ts";

type TypographyProps = {
  children: ReactNode;
  variant?: variantType;
  color?: string;
};

export function Typography({
  children,
  variant = "titleHero",
  ...rest
}: TypographyProps) {
  return (
    <Box as={"span"} className={typoVariants[variant]} {...rest}>
      {children}
    </Box>
  );
}
