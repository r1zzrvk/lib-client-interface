import styled from 'styled-components'

import { theme } from '@constants'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${theme.space.sm}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    margin: ${theme.space.lg}px 0px;
    padding: 0px ${theme.space.lg}px;
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    align-items: center;
  }
`

const InfoBanner = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: ${theme.colors.white};
  justify-content: space-between;
  border-radius: ${theme.radiuses.md}px;
  padding: ${theme.space.sm}px;
  box-shadow: 4px 4px 8px 0px rgba(144, 134, 133, 0.25), -4px -4px 8px 0px rgba(153, 139, 138, 0.25);

  @media (min-width: ${theme.breakpoints.sm}px) {
    max-width: 700px;
    box-shadow: 4px 4px 8px 0px rgba(144, 134, 133, 0.25), -4px -4px 8px 0px rgba(153, 139, 138, 0.25);
    padding: ${theme.space.md}px;
  }
`

const IconWrapper = styled.div`
  padding: ${theme.space.xs}px;
  border-radius: ${theme.radiuses.round}px;
  background-color: ${theme.colors.white};
`

const ListsWrapper = styled.div`
  width: 100%;
  margin: ${theme.space.md}px 0px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    box-sizing: border-box;
    margin: ${theme.space.lg}px 0px;
    padding: ${theme.space.lg}px ${theme.space.md}px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
    border-radius: ${theme.radiuses.md}px;
    background-color: ${theme.colors.white};
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    margin: ${theme.space.lg}px 120px ${theme.space.lg}px 120px;
    max-width: 700px;
  }
`

export const Styled = {
  Wrapper,
  ListsWrapper,
  InfoBanner,
  IconWrapper,
}
