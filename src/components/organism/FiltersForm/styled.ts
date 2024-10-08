import styled from 'styled-components'

import { theme } from '@constants'

export const Filters = styled.div`
  padding: ${theme.space.sm}px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: ${theme.space.xs}px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    background-color: ${theme.colors.white};
    padding: ${theme.space.sm}px;
    height: 100%;
    border-radius: ${theme.radiuses.md}px;
    box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
    width: 400px;
  }

  @media (min-width: ${theme.breakpoints.md}px) {
    width: 500px;
    gap: ${theme.space.sm}px;
  }
`

const ButtonBlock = styled.div`
  margin-top: ${theme.space.xs2}px;
  width: 100%;
`

export const Styled = {
  Filters,
  ButtonBlock,
}
