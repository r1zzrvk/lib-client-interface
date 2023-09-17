import { FC } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AlertBanner, Button, Spacer, Text } from '@ui-kit'
import { theme } from '@constants'
import { useAppDispatch, useBreakpoint } from '@hooks'
import { auth } from '@api'
import { setUser } from '@reducers'
import { NoticeMessage } from './constants'
import { StepWrapper } from '../../atoms'

type TAuthStepProps = {
  nextStep: () => void
  onError: () => void
}

export const AuthStep: FC<TAuthStepProps> = ({ nextStep, onError }) => {
  const dispatch = useAppDispatch()
  const { isMob } = useBreakpoint()

  const googleProvider = new GoogleAuthProvider()

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        dispatch(setUser(user))
      })
      .catch(() => onError())
  }

  const loginAsGuest = () => nextStep()

  return (
    <StepWrapper>
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.header.lg}
        fontWeight={theme.fonts.weight.medium}
        fontHeight={theme.fonts.height.header.lg}
        fontSizeMob={theme.fonts.size.header.md}
        fontHeightMob={theme.fonts.height.header.md}
        fontWeightMob={theme.fonts.weight.medium}
      >
        Log in
      </Text>
      <Spacer size={theme.space.xl2} sizeMob={theme.space.lg} />
      <Button size="md" onClick={loginWithGoogle} isFluid={isMob}>
        Sign in with Google
      </Button>
      <Button size="md" onClick={loginAsGuest} isGhost>
        Continue as guest
      </Button>
      <Spacer size={theme.space.xs} sizeMob={theme.space.xl} />
      <AlertBanner heading={NoticeMessage.heading} icon={NoticeMessage.icon}>
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.regular.sm}
          fontHeight={theme.fonts.height.regular.sm}
        >
          {NoticeMessage.message}
        </Text>
      </AlertBanner>
    </StepWrapper>
  )
}
