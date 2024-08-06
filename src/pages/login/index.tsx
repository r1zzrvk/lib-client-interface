/* eslint-disable import/no-default-export */
import { FC } from 'react'

import { LoginForm } from '@components/organism'
import { Spacer } from '@ui-kit'
import { Background } from '@components/atoms'

import { theme } from '@constants'
import { LayoutTemplate } from '@templates'
import { getStaticPageProps } from '@api'
import { TPageDataProps } from '@types'

export const getStaticProps = getStaticPageProps

const LoginPage: FC<TPageDataProps> = ({ headerFooterData }) => (
  <LayoutTemplate headerFooterData={headerFooterData}>
    <Background color={theme.colors.main}>
      <Spacer size={theme.space.xl} sizeMob={0} />
      <LoginForm />
      <Spacer size={theme.space.xl} sizeMob={0} />
    </Background>
  </LayoutTemplate>
)

export default LoginPage
