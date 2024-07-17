import { ReactNode } from "react";
import { typoVariants, variantType } from "./typography.css";
import { Box, BoxProps } from "@components/box";

type TypographyProps = BoxProps & {
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
