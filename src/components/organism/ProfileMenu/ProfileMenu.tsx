import { FC } from 'react'
import { userData } from '@constants'
import { ProfileBanner } from './molecules'
import { Styled } from './styled'

export const ProfileMenu: FC = () => (
  <Styled.Wrapper>
    <ProfileBanner user={userData} />
  </Styled.Wrapper>
)
