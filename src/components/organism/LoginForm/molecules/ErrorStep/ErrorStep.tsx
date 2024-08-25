import { useRouter } from 'next/router'
import { FC } from 'react'

import { StatusIllustration } from '@components/molecules'

import { SERVER_ERROR } from '@constants'
import { EPagePaths } from '@types'

import { StepWrapper } from '../../atoms'

export const ErrorStep: FC = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push(EPagePaths.MAIN)
  }

  return (
    <StepWrapper>
      <StatusIllustration
        title={SERVER_ERROR.title}
        altText={SERVER_ERROR.altText}
        imgUrl={SERVER_ERROR.imgUrl}
        subtitle={SERVER_ERROR.subtitle}
        onButtonClick={handleClick}
        buttonText="Back to home"
        hasButton
        isVisible
      />
    </StepWrapper>
  )
}
