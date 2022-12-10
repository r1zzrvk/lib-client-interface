import { FC } from 'react'
import { PROFILE_MENU, userData } from '@constants'
import { Tabs } from '@components'
import { ProfileBanner } from './molecules'
import { Styled } from './styled'

export const ProfileMenu: FC = () => (
  <Styled.Wrapper>
    <ProfileBanner user={userData} />
    <Tabs items={PROFILE_MENU} />
  </Styled.Wrapper>
)
