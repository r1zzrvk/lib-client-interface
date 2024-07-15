/* eslint-disable import/no-default-export */
import { useRouter } from 'next/router'
import { FC } from 'react'

import { Background } from '@components/atoms'
import { ListsSkeleton, StatusIllustration } from '@components/molecules'
import { Lists } from '@components/organism'
import { Spacer } from '@ui-kit'

import { getStaticPageProps } from '@api'
import { LIST_FOR_AUTHED_USERS, theme } from '@constants'
import { useAppSelector } from '@hooks'
import { getLoading, getUserAuth, getUserData } from '@selectors'
import { LayoutTemplate } from '@templates'
import { EPagePaths, TPageDataProps } from '@types'

export const getStaticProps = getStaticPageProps

const MyLists: FC<TPageDataProps> = ({ headerFooterData }) => {
  const router = useRouter()
  const isLoading = useAppSelector(getLoading)
  const isAuth = useAppSelector(getUserAuth)
  const user = useAppSelector(getUserData)
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
          buttonText="Log in"
          onButtonClick={handleAuthClick}
          hasButton
        />
        {isLoading && isAuth && uid && <ListsSkeleton />}
        <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      </Background>
    </LayoutTemplate>
  )
}

export default MyLists
