import { theme } from '@constants'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-width: 264px;
  min-height: 300px;
  max-width: 264px;
  max-height: 256px;
  box-shadow: 0px 4px 12px 2px rgba(0, 0, 0, 0.08);
  border-radius: ${theme.radiuses.md}px;
`

const Image = styled.div`
  width: 100%;
  height: 200px;
  border-radius: ${theme.radiuses.md}px ${theme.radiuses.md}px 0px 0px;
  background-color: ${theme.colors.main};
  display: flex;
  align-items: flex-end;
`

export const Styled = {
  Wrapper,
  Image,
}
