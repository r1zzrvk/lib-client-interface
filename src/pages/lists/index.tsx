/* eslint-disable import/no-default-export */
import React, { FC } from 'react'
import { useRouter } from 'next/router'

import { Lists } from '@components/organism'
import { Button, Spacer } from '@ui-kit'
import { ListsSkeleton, StatusIllustration } from '@components/molecules'
import { Background, Flexbox } from '@components/atoms'

import { LayoutTemplate } from '@templates'
import { EPagePaths, TPageDataProps } from '@types'
import { getStaticPageProps } from '@api'
import { useAppSelector, useBreakpoint } from '@hooks'
import { getLoading, getUserAuth, getUserData } from '@selectors'
import { LIST_FOR_AUTHED_USERS, theme } from '@constants'

export const getStaticProps = getStaticPageProps

const MyLists: FC<TPageDataProps> = ({ headerFooterData }) => {
  const router = useRouter()
  const isLoading = useAppSelector(getLoading)
  const isAuth = useAppSelector(getUserAuth)
  const user = useAppSelector(getUserData)
  const { isMob } = useBreakpoint()
  const { uid } = user || {}

  const handleAuthClick = () => {
    router.push(EPagePaths.LOGIN)
  }

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      <Background color={theme.colors.white}>
        <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
        {isAuth && uid && <Lists uid={uid} />}
        <StatusIllustration
          title={LIST_FOR_AUTHED_USERS.title}
          altText={LIST_FOR_AUTHED_USERS.altText}
          imgUrl={LIST_FOR_AUTHED_USERS.imgUrl}
          subtitle={LIST_FOR_AUTHED_USERS.subtitle}
          isVisible={!isAuth && !uid && !isLoading}
        />
        {!isAuth && !uid && !isLoading && (
          <Flexbox justify="center" align="center" direction="column">
            <Spacer size={theme.space.lg} sizeMob={theme.space.sm} />
            <Button isFluid={isMob} onClick={handleAuthClick} size="lg">
              Log in
            </Button>
          </Flexbox>
        )}
        {isLoading && isAuth && uid && <ListsSkeleton />}
        <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      </Background>
    </LayoutTemplate>
  )
}

export default MyLists
