import { FC, ReactNode } from 'react'
import { PROFILE_MENU, theme } from '@constants'
import { Spacer, Tabs } from '@ui-kit'
import { ProfileBanner } from '@components/molecules'
import { TTab } from '@types'
import { Styled } from './styled'
import { MyLists, PersonalInfo } from './molecules'

type TProfileMenuProps = {
  activeTab: TTab
  onSelect: (tab: TTab) => void
}

export const ProfileMenu: FC<TProfileMenuProps> = ({ activeTab, onSelect }) => {
  const tabContent: Record<string, ReactNode> = {
    'Personal information': <PersonalInfo />,
    'My lists': <MyLists />,
  }

  return (
    <Styled.Wrapper>
      <ProfileBanner variant="horizontal" />
      <Spacer sizeMob={theme.space.sm} />
      <Tabs items={PROFILE_MENU} activeTab={activeTab} onSelect={onSelect} />
      {tabContent[activeTab.title]}
    </Styled.Wrapper>
  )
}
