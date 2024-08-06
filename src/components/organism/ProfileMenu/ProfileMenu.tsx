import { FC, ReactNode, useMemo } from 'react'

import { Spacer, Tabs } from '@ui-kit'
import { ProfileBanner } from '@components/molecules'

import { theme } from '@constants'
import { useAppSelector } from '@hooks'
import { getUserData } from '@selectors'
import { EProfileTabs, TTab } from '@types'

import { AccountInfo, MyLists, PersonalInfo } from './molecules'
import { Styled } from './styled'
import { filterProfileMenu } from './utils'

type TProfileMenuProps = {
  activeTab: TTab
  onSelect: (tab: TTab) => void
}

export const ProfileMenu: FC<TProfileMenuProps> = ({ activeTab, onSelect }) => {
  const user = useAppSelector(getUserData)
  const filtredProfileMenu = useMemo(() => filterProfileMenu(user), [user])

  if (!user) {
    return null
  }

  const tabContent: Record<string, ReactNode> = {
    [EProfileTabs.PERSONAL]: <PersonalInfo />,
    [EProfileTabs.ACCOUNT]: <AccountInfo />,
    [EProfileTabs.LISTS]: <MyLists />,
  }

  return (
    <Styled.Wrapper>
      <Styled.DesktopLayout>
        <ProfileBanner variant="horizontal" />
        <Spacer sizeMob={theme.space.sm} />
        <Styled.TabsWrapper>
          <Tabs items={filtredProfileMenu} activeTab={activeTab} onSelect={onSelect} />
          {tabContent[activeTab.title]}
        </Styled.TabsWrapper>
      </Styled.DesktopLayout>
    </Styled.Wrapper>
  )
}
