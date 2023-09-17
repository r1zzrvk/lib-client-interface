import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { ProfileTab, ProfileMenu } from '@components/molecules'
import { ProfileWrapper } from '@components/atoms'
import { PROFILE_MENU } from '@constants'
import { useAppSelector, useBreakpoint } from '@hooks'
import { EPagePaths, TTab } from '@types'
import { getUserData } from '@selectors'

const ProfilePage: FC = () => {
  const router = useRouter()
  const user = useAppSelector(getUserData)
  const isAuth = !!user
  const [selectedTabId, setSelectedTabId] = useState('1')
  const currentTab: TTab | undefined = PROFILE_MENU.find(({ id }) => id === selectedTabId)
  const { isTablet, isSm, isMob } = useBreakpoint()

  if (!isAuth) {
    router.push(EPagePaths.LOGIN)
  }

  return (
  <ProfileWrapper>
    <ProfileMenu activeTab={selectedTabId} onSelect={setSelectedTabId} isColumn={isTablet || isSm}/>
    {(isTablet || isSm || isMob) || <ProfileTab activeTab={currentTab}/>}
  </ProfileWrapper>
)}

export default ProfilePage