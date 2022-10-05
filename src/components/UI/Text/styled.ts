import { theme } from "@constants"
import styled from "styled-components"

type TStyledProps = {
  fontSize: number,
  fontWeight: number,
  fontHeight: number,
  fontSizeMob: number,
  fontWeightMob: number,
  fontHeightMob: number,
  color: string,
  marginBottom: number,
  marginBottomMob: number,
  paddingRight: number,
}

const TextWrapper = styled.p<TStyledProps>`
font-size: ${props => props.fontSizeMob}px;
font-weight: ${props => props.fontWeightMob};
line-height: ${props => props.fontHeightMob}px;
color: ${props => props.color};
margin-bottom: ${props => props.marginBottomMob}px;
font-family: "${theme.fonts.family}", sans-serif;
padding-right: ${props => props.paddingRight}px;

@media (min-width: ${theme.breakpoints.tablet}px) {
font-size: ${props => props.fontSize}px;
font-weight: ${props => props.fontWeight};
line-height: ${props => props.fontHeight}px;
margin-bottom: ${props => props.marginBottom}px;
}
`

export const Styled = {
  TextWrapper,
}
