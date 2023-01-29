import { FC } from 'react'
import axios from 'axios'
import { AlertBanner, Button, Spacer, Text } from '@components'
import { theme } from '@constants'
import { useGoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/router'
import { NoticeMessage } from './constants'

type TAuthStepProps = {
  nextStep: () => void
  onError: () => void
}

export const AuthStep: FC<TAuthStepProps> = ({ nextStep, onError }) => {
  const router = useRouter()
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async codeResponse => {
      await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${codeResponse.access_token}`,
          },
        })
        .then(data => console.log(data))
        .then(() => router.push('/'))
        .catch(() => onError)
    },
  })

  const loginAsGuest = () => nextStep()

  return (
    <>
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.header.lg}
        fontWeight={theme.fonts.weight.medium}
        fontHeight={theme.fonts.height.header.lg}
      >
        Log in
      </Text>
      <Spacer size={theme.space.xl2} />
      <Button size="md" onClick={() => loginWithGoogle()}>
        Sign in with Google
      </Button>
      <Button size="md" onClick={loginAsGuest} isGhost>
        Сontinue as guest
      </Button>
      <Spacer size={theme.space.xs} />
      <AlertBanner heading={NoticeMessage.heading} icon={NoticeMessage.icon}>
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.regular.xs}
          fontHeight={theme.fonts.height.regular.xs}
        >
          {NoticeMessage.message}
        </Text>
      </AlertBanner>
    </>
  )
}
