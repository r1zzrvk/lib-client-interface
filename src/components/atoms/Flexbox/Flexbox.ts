import styled from 'styled-components'

type TFlexboxProps = {
  justify?: 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'end' | 'start' | 'stretch' | 'baseline'
  align?: 'center' | 'baseline' | 'flex-end' | 'flex-start' | 'stretch'
  gap?: number
  direction?: 'column' | 'row'
}

export const Flexbox = styled.div<TFlexboxProps>`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;
`
