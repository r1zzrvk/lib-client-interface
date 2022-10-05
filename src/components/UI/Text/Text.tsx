import { theme } from "@constants";
import { FC, ReactNode } from "react";
import { Styled } from "./styled";

type TTextProps = {
  children: ReactNode,
  fontSize?: number,
  fontWeight?: number,
  fontHeight?: number,
  fontSizeMob?: number,
  fontWeightMob?: number,
  fontHeightMob?: number,
  marginBottom?: number,
  marginBottomMob?: number,
  color?: string,
  paddingRight?: number,
}

export const Text: FC<TTextProps> = ({
  children,
  fontSize = theme.fonts.size.regular.md,
  fontWeight = theme.fonts.weight.regular,
  fontHeight = theme.fonts.height.regular.md,
  fontSizeMob = theme.fonts.size.regular.xs,
  fontWeightMob = theme.fonts.weight.regular,
  fontHeightMob = theme.fonts.height.regular.xs,
  marginBottom = 0,
  marginBottomMob = 0,
  color = theme.colors.white,
  paddingRight = 0,
}) => (
  <Styled.TextWrapper
    fontSize={fontSize}
    fontWeight={fontWeight}
    fontHeight={fontHeight}
    fontSizeMob={fontSizeMob}
    fontWeightMob={fontWeightMob}
    fontHeightMob={fontHeightMob}
    marginBottom={marginBottom}
    marginBottomMob={marginBottomMob}
    color={color}
    paddingRight={paddingRight}>
    {children}
  </Styled.TextWrapper>
)