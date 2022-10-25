import { theme } from "@constants";
import { useRouter } from "next/router";
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
  asLink?: boolean,
  href?: string
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
  asLink = false,
  href,
}) => {
  const router = useRouter()

  const handleClick = () => {
    asLink && router.push(String(href))
  }

  return (
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
    paddingRight={paddingRight}
    asLink={asLink}
    onClick={handleClick}>
    {children}
  </Styled.TextWrapper>
  )
}