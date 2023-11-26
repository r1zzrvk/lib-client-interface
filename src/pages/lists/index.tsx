import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { LayoutTemplate } from '@templates'
import { EPagePaths, TPageDataProps } from '@types'
import { getStaticPageProps } from '@api'
import { useAppSelector, useBreakpoint } from '@hooks'
import { getUserAuth, getUserData } from '@selectors'
import { Lists } from '@components/organism'
import { Button, Spacer } from '@ui-kit'
import { NO_AUTH, theme } from '@constants'
import { StatusIllustration } from '@components/molecules'
import { Flexbox } from '@components/atoms'

export const getStaticProps = getStaticPageProps

const MyLists: FC<TPageDataProps> = ({ headerFooterData }) => {
  const { isMob } = useBreakpoint()
  const router = useRouter()
  const isAuth = useAppSelector(getUserAuth)
  const user = useAppSelector(getUserData)
  const { uid } = user || {}

  const handleClickLogIn = () => {
    router.push(EPagePaths.LOGIN)
  }
  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      {isAuth && uid && <Lists uid={uid} />}
      <StatusIllustration
        title={NO_AUTH.title}
        altText={NO_AUTH.altText}
        imgUrl={NO_AUTH.imgUrl}
        subtitle={NO_AUTH.subtitle}
        isVisible={!isAuth}
      />
      {!isAuth && (
        <Flexbox justify="center" align="center" direction="column">
          <Spacer size={theme.space.lg} sizeMob={theme.space.sm} />
          <Button isFluid={isMob} onClick={handleClickLogIn} size="lg">
            Log in
          </Button>
        </Flexbox>
      )}
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
    </LayoutTemplate>
  )
}

export default MyLists
