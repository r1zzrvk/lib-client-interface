import styled from 'styled-components'
import { theme } from '@constants'

type TStepWrapperProps = {
  withoutShadow?: boolean
}

export const StepWrapper = styled.div<TStepWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  width: 100%;
  padding: ${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    width: auto;
    max-width: 380px;
    border-radius: ${theme.radiuses.lg}px;
    box-shadow: ${({ withoutShadow }) => (withoutShadow ? 'none' : '0px 4px 12px 2px rgba(0, 0, 0, 0.08)')};
    padding: ${theme.space.lg}px;
  }
`
