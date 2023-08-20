import { FC } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useGoogleLogin } from '@react-oauth/google'
import { AlertBanner, Button, Spacer, Text } from '@ui-kit'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { NoticeMessage } from './constants'
import { StepWrapper } from '../../atoms'

type TAuthStepProps = {
  nextStep: () => void
  onError: () => void
}

export const AuthStep: FC<TAuthStepProps> = ({ nextStep, onError }) => {
  const router = useRouter()
  const { isMob } = useBreakpoint()

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async codeResponse => {
      await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
          },
        })
        .then(data => data)
        .then(() => router.push('/'))
        .catch(() => onError())
    },
  })

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
