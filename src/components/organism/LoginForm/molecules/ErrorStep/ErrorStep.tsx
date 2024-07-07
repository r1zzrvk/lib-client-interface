import { FC } from 'react'
import { useRouter } from 'next/router'

import { StatusIllustration } from '@components/molecules'
import { Button, Spacer } from '@ui-kit'

import { SERVER_ERROR, theme } from '@constants'
import { EPagePaths } from '@types'
import { useBreakpoint } from '@hooks'

import { StepWrapper } from '../../atoms'

export const ErrorStep: FC = () => {
  const { isMob } = useBreakpoint()
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
        isVisible
      />
      <Spacer size={theme.space.lg} sizeMob={theme.space.md} />
      <Button size="lg" isFluid={isMob} onClick={handleClick}>
        Back to home
      </Button>
    </StepWrapper>
  )
}
