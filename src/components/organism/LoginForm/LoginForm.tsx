import { FC, useState } from 'react'
import { Styled } from './styled'
import { AuthStep, ErrorStep, GuestStep } from './molecules'
import { ESteps } from './constants'

export const LoginForm: FC = () => {
  const [step, setStep] = useState<ESteps>(ESteps.Auth)

  const handleError = () => setStep(ESteps.Error)

  const stepHandler = () => {
    switch (step) {
      case ESteps.Auth:
        return <AuthStep nextStep={() => setStep(ESteps.Guest)} onError={handleError} />
      case ESteps.Guest:
        return <GuestStep prevStep={() => setStep(ESteps.Auth)} />
      default:
        return <ErrorStep />
    }
  }
  return <Styled.Wrapper>{stepHandler()}</Styled.Wrapper>
}
