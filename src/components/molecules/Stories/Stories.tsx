import { theme } from '@constants'
import React, { useState } from 'react'
import styled from 'styled-components'

// заготовка для Stories

// progress bar
const ProgressContainer = styled.div`
  height: 50px;
  margin: 16px;
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
`

const Container = styled.div``

const ProgressBar = styled.div`
  border-radius: 2px;
  height: 4px;
  background-color: ${theme.colors.beige};
`

const ProgressBarActive = styled.div<{ active: boolean; isPrev: boolean }>`
  margin-top: -4px;
  border-radius: 2px;
  height: 4px;
  animation: ${({ active }) => active && 'progressBar 10s linear'};
  background-color: ${({ active, isPrev }) => (active || isPrev ? theme.colors.grey : theme.colors.beige)};

  @keyframes progressBar {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }
`

export const Stories = () => {
  const arr = [1, 2, 3, 4, 5, 6]
  const [activeSlide, setActiveSlide] = useState(1)

  const handleNextSlide = () => {
    setActiveSlide(activeSlide + 1)
  }

  return (
    <ProgressContainer>
      {arr.map((item, i) => (
        <Container key={item} onClick={() => setActiveSlide(item)}>
          <ProgressBar />
          <ProgressBarActive isPrev={i < activeSlide} active={activeSlide === item} onAnimationEnd={handleNextSlide} />
        </Container>
      ))}
    </ProgressContainer>
  )
}
