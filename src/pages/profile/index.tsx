import { FC, useState } from 'react'
import { ProfileMenu } from '@components/organism'
import { PROFILE_MENU } from '@constants'
import { TPageDataProps, TTab } from '@types'
import { getStaticPageProps } from '@api'
import { LayoutTemplate } from '@templates'
import { useAppSelector } from '@hooks'
import { getUserAuth } from '@selectors'
import { ProfileSkeleton } from '@components/molecules'

export const getStaticProps = getStaticPageProps

const ProfilePage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const isAuth = useAppSelector(getUserAuth)
  const [selectedTab, setSelectedTab] = useState<TTab>(PROFILE_MENU[0])

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      {!isAuth ? <ProfileMenu activeTab={selectedTab} onSelect={setSelectedTab} /> : <ProfileSkeleton />}
    </LayoutTemplate>
  )
}

export default ProfilePage
