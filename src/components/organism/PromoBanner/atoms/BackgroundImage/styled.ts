import { theme } from '@constants'
import styled from 'styled-components'

type TBackgroundImageProps = {
  src: string
}

export const BackgroundImage = styled.div<TBackgroundImageProps>`
  display: flex;
  align-items: center;
  justify-content: end;
  background-image: url(${({ src }) => src});
  background-position: bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  margin: 0px -${theme.space.sm}px 0px -${theme.space.sm}px;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    height: 800px;
    margin: 0px;
  }
`
