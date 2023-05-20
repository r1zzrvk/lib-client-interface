import { FC, useState } from 'react'
import { ProfileTab, ProfileMenu } from '@components/molecules'
import { ProfileWrapper } from '@components/atoms'
import { PROFILE_MENU } from '@constants'
import { useBreakpoint } from '@hooks'
import { TTab } from '@types'

const ProfilePage: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('1')
  const currentTab: TTab | undefined = PROFILE_MENU.find(({ id }) => id === selectedTabId)
  const { isTablet, isSm, isMob } = useBreakpoint()
  return (
  <ProfileWrapper>
    <ProfileMenu activeTab={selectedTabId} onSelect={setSelectedTabId} isColumn={isTablet || isSm}/>
    {(isTablet || isSm || isMob) || <ProfileTab activeTab={currentTab}/>}
  </ProfileWrapper>
)}

export default ProfilePage