import { theme } from '@constants'
import styled from 'styled-components'

type TBackgroundImageProps = {
  src: string
}

export const BackgroundImage = styled.div<TBackgroundImageProps>`
  display: none;

  @media (min-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    align-items: center;
    justify-content: end;
    background-image: url(${({ src }) => src});
    background-position: bottom;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    height: 800px;
  }
`
