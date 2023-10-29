import { FC, useState } from 'react'
import { ProfileTab, ProfileMenu } from '@components/molecules'
import { ProfileWrapper } from '@components/atoms'
import { PROFILE_MENU } from '@constants'
import { useBreakpoint } from '@hooks'
import { TPageDataProps, TTab } from '@types'
import { getStaticPageProps } from '@api'
import { LayoutTemplate } from '@templates'

export const getStaticProps = getStaticPageProps

const ProfilePage: FC<TPageDataProps> = ({ headerFooterData }) => {
  const [selectedTabId, setSelectedTabId] = useState('1')
  const currentTab: TTab | undefined = PROFILE_MENU.find(({ id }) => id === selectedTabId)
  const { isTablet, isSm, isMob } = useBreakpoint()

  return (
    <LayoutTemplate headerFooterData={headerFooterData}>
      <ProfileWrapper>
        <ProfileMenu activeTab={selectedTabId} onSelect={setSelectedTabId} isColumn={isTablet || isSm} />
        {isTablet || isSm || isMob || <ProfileTab activeTab={currentTab} />}
      </ProfileWrapper>
    </LayoutTemplate>
  )
}

export default ProfilePage
