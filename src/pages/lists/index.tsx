/* eslint-disable import/no-default-export */
import { FC } from 'react'

import { ListsLayout } from '@components/organism'

import { getStaticPageProps } from '@api'
import { LayoutTemplate } from '@templates'
import { TPageDataProps } from '@types'

export const getStaticProps = getStaticPageProps

const MyLists: FC<TPageDataProps> = ({ headerFooterData }) => (
  <LayoutTemplate headerFooterData={headerFooterData}>
    <ListsLayout />
  </LayoutTemplate>
)

export default MyLists
