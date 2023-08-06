import styled from 'styled-components'

type TSkeletonProps = {
  width?: number
  height?: number
  radius?: number
}

export const Skeleton = styled.div<TSkeletonProps>`
  background-color: #ddd;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  border-radius: ${({ radius }) => radius || 0}px;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.6;
    }

    100% {
      opacity: 1;
    }
  }
`
