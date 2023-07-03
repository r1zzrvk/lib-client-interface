import { FC } from 'react'
import { Avatar, Text } from '@ui-kit'
import { IconsSelector } from '@components/molecules'
import { theme } from '@constants'
import { useBreakpoint } from '@hooks'
import { TUser } from '@types'
import { Styled } from './styled'

type TProfileBannerProps = {
  user: TUser
}

export const ProfileBanner: FC<TProfileBannerProps> = ({ user: { avatar, email, firstName, surName } }) => {
  const { isMob } = useBreakpoint()

  return (
    <Styled.Wrapper>
      <Styled.UserInfo>
        <Avatar src={avatar} />
        <Styled.TextWrapper>
          <Text
            color={theme.colors.grey}
            fontSize={theme.fonts.size.header.sm}
            fontHeight={theme.fonts.height.header.sm}
            fontWeight={theme.fonts.weight.medium}
            fontSizeMob={theme.fonts.size.regular.md}
          >
            {`${firstName} ${surName}`}
          </Text>
          <Text color={theme.colors.main}>{email}</Text>
        </Styled.TextWrapper>
      </Styled.UserInfo>
      <IconsSelector
        icon="exit_solid"
        color={theme.colors.grey}
        size={isMob ? theme.icon_sizes.xs : theme.icon_sizes.sm}
      />
    </Styled.Wrapper>
  )
}
