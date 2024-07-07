import { FC, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useAppSelector } from '@hooks'
import { getUserAuth } from '@selectors'

import { Styled } from './styled'
import { AccountRecoveryStep, AuthStep, ErrorStep, SignUpStep } from './molecules'
import { ESteps } from './constants'

export const LoginForm: FC = () => {
  const router = useRouter()
  const isAuth = useAppSelector(getUserAuth)
  const [step, setStep] = useState<ESteps>(ESteps.Auth)

  const handleError = () => setStep(ESteps.Error)

  const stepHandler = useCallback(() => {
    switch (step) {
      case ESteps.Auth:
        return <AuthStep onError={handleError} setStep={step => setStep(step)} />
      case ESteps.SignUp:
        return <SignUpStep onError={handleError} setStep={step => setStep(step)} />
      case ESteps.AccRecovery:
        return <AccountRecoveryStep onError={handleError} setStep={step => setStep(step)} />
      default:
        return <ErrorStep />
    }
  }, [step])

  useEffect(() => {
    stepHandler()
  }, [stepHandler])

  useEffect(() => {
    if (isAuth) {
      router.back()
    } else {
      setStep(ESteps.Auth)
    }
  }, [isAuth, router])

  return <Styled.Wrapper>{stepHandler()}</Styled.Wrapper>
}
