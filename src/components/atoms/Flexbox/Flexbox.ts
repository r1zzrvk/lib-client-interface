import styled from 'styled-components'

type TFlexboxProps = {
  justify?: 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'end' | 'start' | 'stretch' | 'baseline'
  align?: 'center' | 'baseline' | 'flex-end' | 'flex-start' | 'stretch'
  gap?: number
  direction?: 'column' | 'row' | 'row-reverse' | 'column-reverse'
  width?: number | string
  height?: number | string
  flex?: string
  justifySelf?:
    | 'auto'
    | 'normal'
    | 'stretch'
    | 'center'
    | 'end'
    | 'start'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'left'
    | 'right'
  alignSelf?:
    | 'auto'
    | 'normal'
    | 'stretch'
    | 'center'
    | 'end'
    | 'start'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'left'
    | 'right'
}

export const Flexbox = styled.div<TFlexboxProps>`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap}px;
  height: ${({ height }) => Boolean(height) && (typeof height === 'string' ? height : `${height}px`)};
  width: ${({ width }) => Boolean(width) && (typeof width === 'string' ? width : `${width}px`)};
  flex: ${({ flex }) => flex};
  justify-self: ${({ justifySelf }) => justifySelf || 'auto'};
  align-self: ${({ alignSelf }) => alignSelf || 'auto'};
`
