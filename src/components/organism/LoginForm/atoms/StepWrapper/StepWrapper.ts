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
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm}px) {
    width: auto;
    border-radius: ${theme.radiuses.lg}px;
    box-shadow: ${({ withoutShadow }) => (withoutShadow ? 'none' : '0px 4px 12px 2px rgba(0, 0, 0, 0.08)')};
    padding: ${theme.space.xl4}px ${theme.space.xl4}px ${theme.space.xl4}px ${theme.space.xl4}px;
  }
`
