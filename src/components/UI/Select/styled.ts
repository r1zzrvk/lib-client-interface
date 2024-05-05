import styled from 'styled-components'
import { theme } from '@constants'

type TWrapperProps = {
  fluid: boolean
}

const SelectWrapper = styled.div<TWrapperProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${({ fluid }) => (fluid ? '100%' : '380px')};
`

const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${theme.colors.beige};
  top: 52px;
  z-index: 999;
  width: 100%;
  border-radius: ${theme.radiuses.sm}px;
  max-height: 192px;
  overflow-y: auto;
  box-shadow: 4px 4px 8px 0px rgba(144, 134, 133, 0.25), -4px -4px 8px 0px rgba(153, 139, 138, 0.25);

  ::-webkit-scrollbar {
    display: none;
  }
`

const Option = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  cursor: pointer;
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.size.regular.md}px;
  line-height: ${theme.fonts.height.regular.md}px;
  font-weight: ${theme.fonts.weight.medium};
  font-family: '${theme.fonts.family}', sans-serif;
  padding: 0px 0px 0px ${theme.space.sm}px;
  height: 52px;
  border: none;
  flex-shrink: 0;

  :first-child {
    border-radius: ${theme.radiuses.sm}px ${theme.radiuses.sm}px 0px 0px;
  }

  :last-child {
    border-radius: 0px 0px ${theme.radiuses.sm}px ${theme.radiuses.sm}px;
  }

  :focus {
    outline: none;
  }

  :hover {
    background-color: ${theme.colors.main};
  }
`

const Label = styled.label`
  position: absolute;
  left: 16px;
  top: 16px;
  opacity: 1;
  color: ${theme.colors.grey};
  font-size: ${theme.fonts.size.regular.md}px;
  line-height: ${theme.fonts.height.regular.md}px;
  font-weight: ${theme.fonts.weight.medium};
`

export const Styled = {
  SelectWrapper,
  OptionsWrapper,
  Option,
  Label,
}
