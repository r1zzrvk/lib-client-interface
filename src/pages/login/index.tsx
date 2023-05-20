import { FC } from 'react'
import { Flexbox } from '@components/atoms'
import { LoginForm } from '@components/organism'
import { Spacer } from '@ui-kit'
import { theme } from '@constants'


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
