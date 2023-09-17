import React, { FC } from 'react'
import { LayoutTemplate } from '@templates'
import { THeaderFooter } from '@types'
import { getStaticPageProps } from '@api'

export const getStaticProps = getStaticPageProps

const MyLists: FC<{ headerFooterData: THeaderFooter }> = ({ headerFooterData }) => (
  <LayoutTemplate headerFooterData={headerFooterData}>
    There is will be your lists
  </LayoutTemplate>
)

export default MyLists
