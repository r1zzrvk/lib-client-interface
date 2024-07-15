import styled from 'styled-components'

import { theme } from '@constants'

const InfoBanner = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.beige};
  justify-content: space-between;
  border-radius: ${theme.radiuses.md}px;
  box-shadow: 4px 4px 8px 0px rgba(144, 134, 133, 0.25), -4px -4px 8px 0px rgba(153, 139, 138, 0.25);
  padding: ${theme.space.sm}px ${theme.space.md}px ${theme.space.sm}px ${theme.space.md}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    max-width: 600px;
  }
`

const IconWrapper = styled.div`
  padding: ${theme.space.xs}px;
  border-radius: ${theme.radiuses.round}px;
  background-color: ${theme.colors.white};
`

export const Styled = {
  InfoBanner,
  IconWrapper,
}
