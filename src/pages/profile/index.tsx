import { FC, useState } from 'react'
import { ProfileMenu } from '@components/organism'
import { PROFILE_MENU, theme } from '@constants'
import { TPageDataProps, TTab } from '@types'
import { getStaticPageProps } from '@api'
import { LayoutTemplate } from '@templates'
import { useAppSelector } from '@hooks'
import { getUserAuth } from '@selectors'
import { ProfileSkeleton } from '@components/molecules'
import { Background } from '@components/atoms'

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
