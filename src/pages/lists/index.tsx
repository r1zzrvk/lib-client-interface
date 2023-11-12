import React, { FC } from 'react'
import { LayoutTemplate } from '@templates'
import { TPageDataProps } from '@types'
import { getStaticPageProps } from '@api'
import { useAppSelector } from '@hooks'
import { getUserData } from '@selectors'

export const getStaticProps = getStaticPageProps

const MyLists: FC<TPageDataProps> = ({ headerFooterData }) => {
  const user = useAppSelector(getUserData)
  const { } = user || {}
  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      There is will be your lists
    </LayoutTemplate>
  )
}

export default MyLists
