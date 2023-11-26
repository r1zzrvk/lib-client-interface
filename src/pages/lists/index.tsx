import React, { FC } from 'react'
import { LayoutTemplate } from '@templates'
import { TPageDataProps } from '@types'
import { getStaticPageProps } from '@api'
import { useAppSelector } from '@hooks'
import { getLoading, getUserAuth, getUserData } from '@selectors'
import { Lists } from '@components/organism'
import { Spacer } from '@ui-kit'
import { theme } from '@constants'
import { ListsSkeleton } from '@components/molecules'

export const getStaticProps = getStaticPageProps

const MyLists: FC<TPageDataProps> = ({ headerFooterData }) => {
  const isLoading = useAppSelector(getLoading)
  const isAuth = useAppSelector(getUserAuth)
  const user = useAppSelector(getUserData)
  const { uid } = user || {}

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
      {isAuth && uid && <Lists uid={uid} />}
      {isLoading && <ListsSkeleton />}
      <Spacer size={theme.space.xl} sizeMob={theme.space.sm} />
    </LayoutTemplate>
  )
}

export default MyLists
