import { Text, IconsSelector } from '@components'
import { theme } from '@constants'
import { FC } from 'react'
import { TUser } from 'types/user'
import { Styled } from './styled'

type TProfileBannerProps = {
  user: TUser
}

export const ProfileBanner: FC<TProfileBannerProps> = ({ user: { avatar, email, firstName, surName } }) => (
  <Styled.Wrapper>
    <Styled.UserInfo>
      <Styled.Avatar src={avatar} alt="avatar" />
      <Styled.TextWrapper>
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.header.sm}
          fontHeight={theme.fonts.height.header.sm}
          fontWeight={theme.fonts.weight.medium}
        >
          {`${firstName} ${surName}`}
        </Text>
        <Text color={theme.colors.grey}>{email}</Text>
      </Styled.TextWrapper>
    </Styled.UserInfo>
    <IconsSelector icon="exit" color={theme.colors.grey} />
  </Styled.Wrapper>
)
