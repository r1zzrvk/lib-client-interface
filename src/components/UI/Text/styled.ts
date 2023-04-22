import { theme } from '@constants'
import styled from 'styled-components'

type TStyledProps = {
  fontSize: number
  fontWeight: number
  fontHeight: number
  fontSizeMob: number
  fontWeightMob: number
  fontHeightMob: number
  color: string
  marginBottom: number
  marginBottomMob: number
  paddingRight: number
  asLink: boolean
  align?: 'center' | 'left'
}

const TextWrapper = styled.p<TStyledProps>`
  font-size: ${({ fontSizeMob }) => fontSizeMob}px;
  font-weight: ${({ fontWeightMob }) => fontWeightMob};
  line-height: ${({ fontHeightMob }) => fontHeightMob}px;
  color: ${({ color }) => color};
  margin-top: 0px;
  margin-bottom: ${({ marginBottomMob }) => marginBottomMob}px;
  font-family: '${theme.fonts.family}', sans-serif;
  padding-right: ${({ paddingRight }) => paddingRight}px;
  cursor: ${({ asLink }) => (asLink ? 'pointer' : 'default')};
  transition: 0.4s;
  white-space: pre-line;
  text-align: ${({ align }) => align};

  @media (min-width: ${theme.breakpoints.tablet}px) {
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: ${({ fontWeight }) => fontWeight};
    line-height: ${({ fontHeight }) => fontHeight}px;
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
  }

  &:hover {
    color: ${({ color, asLink }) =>
      asLink && (color === theme.colors.white ? theme.colors.secondary : theme.colors.main)};
    font-weight: ${theme.fonts.weight.semibold};
  }
`

export const Styled = {
  TextWrapper,
}
