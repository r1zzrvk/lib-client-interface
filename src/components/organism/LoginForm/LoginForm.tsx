import { FC } from 'react'
import axios from 'axios'
import { AlertBanner, Button, Spacer, Text } from '@components'
import { theme } from '@constants'
import { useGoogleLogin } from '@react-oauth/google'
import { useRouter } from 'next/router'
import { Styled } from './styled'

export const LoginForm: FC = () => {
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
    },
  })

  const login = () => {
    console.log('Login localy')
    router.push('/')
  }

  return (
    <Styled.Wrapper>
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
      <Button size="md" onClick={login} isGhost>
        Сontinue as guest
      </Button>
      <Spacer size={theme.space.xs} />
      <AlertBanner heading="Notice" icon="minus">
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.regular.xs}
          fontHeight={theme.fonts.height.regular.xs}
        >
          {
            'Pressing "Continue as guest" will create a guest account or sign in your guest account if you already have one. Guest account will only be available on this device.\n\nIf you want to use "My Library" on all of your devices, press "Sign in with Google".'
          }
        </Text>
      </AlertBanner>
    </Styled.Wrapper>
  )
}
