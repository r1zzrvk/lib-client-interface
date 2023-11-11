import { FC, ReactNode } from 'react'
import { PROFILE_MENU, theme } from '@constants'
import { Spacer, Tabs } from '@ui-kit'
import { ProfileBanner } from '@components/molecules'
import { TTab, EProfileTabs } from '@types'
import { Flexbox } from '@components/atoms'
import { Styled } from './styled'
import { MyLists, PersonalInfo } from './molecules'

type TProfileMenuProps = {
  activeTab: TTab
  onSelect: (tab: TTab) => void
}

export const ProfileMenu: FC<TProfileMenuProps> = ({ activeTab, onSelect }) => {
  const tabContent: Record<string, ReactNode> = {
    [EProfileTabs.PERSONAL]: <PersonalInfo />,
    [EProfileTabs.LISTS]: <MyLists />,
  }

  return (
    <Styled.Wrapper>
      <Styled.DesktopLayout>
        <Flexbox direction="column" width="100%">
          <ProfileBanner variant="horizontal" />
          <Spacer sizeMob={theme.space.sm} />
          <Tabs items={PROFILE_MENU} activeTab={activeTab} onSelect={onSelect} />
        </Flexbox>
        {tabContent[activeTab.title]}
      </Styled.DesktopLayout>
    </Styled.Wrapper>
  )
}
