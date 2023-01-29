import { Flexbox, LoginForm, Spacer } from '@components'
import { theme } from '@constants'
import { FC } from 'react'

const LoginPage: FC = () => {
  return (
    <>
      <Spacer size={theme.space.xl4} />
      <Flexbox justify="center" align="center">
        <LoginForm />
      </Flexbox>
      <Spacer size={theme.space.xl4} />
    </>
  )
}

export default LoginPage
