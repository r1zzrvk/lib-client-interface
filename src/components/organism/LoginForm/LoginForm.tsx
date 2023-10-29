import { FC, useCallback, useEffect, useState } from 'react'
import { useAppSelector } from '@hooks'
import { getUserAuth } from '@selectors'
import { Styled } from './styled'
import { AuthStep, ErrorStep, GuestStep, SignedStep } from './molecules'
import { ESteps } from './constants'

export const LoginForm: FC = () => {
  const isAuth = useAppSelector(getUserAuth)
  const [step, setStep] = useState<ESteps>(ESteps.Auth)

  const handleError = () => setStep(ESteps.Error)

  const stepHandler = useCallback(() => {
    switch (step) {
      case ESteps.Auth:
        return <AuthStep onError={handleError} />
      case ESteps.Guest:
        return <GuestStep prevStep={() => setStep(ESteps.Auth)} />
      case ESteps.Signed:
        return <SignedStep onError={handleError} />
      default:
        return <ErrorStep />
    }
  }, [step])

  useEffect(() => {
    stepHandler()
  }, [stepHandler])

  useEffect(() => {
    if (isAuth) {
      setStep(ESteps.Signed)
    } else {
      setStep(ESteps.Auth)
    }
  }, [isAuth])

  return <Styled.Wrapper>{stepHandler()}</Styled.Wrapper>
}
