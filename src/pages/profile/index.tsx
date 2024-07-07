/* eslint-disable import/no-default-export */
import { FC, useState } from 'react'

import { Background } from '@components/atoms'
import { ProfileSkeleton } from '@components/molecules'
import { ProfileMenu } from '@components/organism'

import { getStaticPageProps } from '@api'
import { PROFILE_MENU, theme } from '@constants'
import { useAppSelector } from '@hooks'
import { getUserAuth } from '@selectors'
import { LayoutTemplate } from '@templates'
import { TPageDataProps, TTab } from '@types'

export const getStaticProps = getStaticPageProps

const ProfilePage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const isAuth = useAppSelector(getUserAuth)
  const [selectedTab, setSelectedTab] = useState<TTab>(PROFILE_MENU[0])

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      <Background color={theme.colors.white}>
        {isAuth ? <ProfileMenu activeTab={selectedTab} onSelect={setSelectedTab} /> : <ProfileSkeleton />}
      </Background>
    </LayoutTemplate>
  )
}

export default ProfilePage
