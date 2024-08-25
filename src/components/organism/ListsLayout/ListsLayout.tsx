import { useRouter } from 'next/router'
import { FC } from 'react'

import { ListsSkeleton, StatusIllustration } from '@components/molecules'

import { useAppSelector } from '@hooks'
import { getLoading, getUserAuth, getUserData } from '@selectors'
import { EPagePaths } from '@types'
import { LIST_FOR_AUTHED_USERS } from '@constants'

import { Lists } from '../Lists/Lists'
import { Styled } from './styled'

export const ListsLayout: FC = () => {
  const router = useRouter()
  const isLoading = useAppSelector(getLoading)
  const isAuth = useAppSelector(getUserAuth)
  const user = useAppSelector(getUserData)
  const { uid } = user || {}

  const handleAuthClick = () => {
    router.push(EPagePaths.LOGIN)
  }

  return (
    <Styled.Wrapper>
      <Styled.ListsWrapper>
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
      </Styled.ListsWrapper>
    </Styled.Wrapper>
  )
}
