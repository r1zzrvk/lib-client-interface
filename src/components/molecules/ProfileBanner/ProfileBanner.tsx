import { FC } from 'react'
import { signOut } from 'firebase/auth'

import { ActionIcon, Avatar, Button, Text } from '@ui-kit'

import { theme } from '@constants'
import { useAppDispatch, useAppSelector, useBreakpoint } from '@hooks'
import { getUserData } from '@selectors'
import { EAuthorizationStatus } from '@types'
import { auth } from '@api'
import { setAuthStatus, setUser } from '@reducers'

import { Styled } from './styled'

type TProfileBannerProps = {
  variant?: 'horizontal' | 'vertical'
  color?: string
  onError?: () => void
  onProfileClick?: () => void
}

export const ProfileBanner: FC<TProfileBannerProps> = ({
  variant = 'horizontal',
  color = theme.colors.white,
  onError,
  onProfileClick,
}) => {
  const dispatch = useAppDispatch()
  const { isMob } = useBreakpoint()
  const user = useAppSelector(getUserData)
  const { email, displayName, photoURL } = user || {}

  const handleSignOut = async () => {
    await signOut(auth)
      .then(() => {
        dispatch(setUser(null))
        dispatch(setAuthStatus(EAuthorizationStatus.NO_AUTH))
      })
      .catch(() => {
        if (onError) {
          onError()
        }
      })
  }

  return (
    <Styled.Wrapper variant={variant} color={color}>
      <Styled.UserInfo variant={variant} onClick={onProfileClick}>
        <Avatar src={photoURL} hasAction={Boolean(onProfileClick)} size={isMob ? 'sm' : 'lg'} />
        <Styled.TextWrapper variant={variant}>
          <Text
            color={theme.colors.grey}
            fontSize={theme.fonts.size.header.sm}
            fontHeight={theme.fonts.height.header.sm}
            fontWeight={theme.fonts.weight.medium}
            fontSizeMob={theme.fonts.size.regular.lg}
            fontHeightMob={theme.fonts.height.regular.lg}
          >
            {displayName}
          </Text>
          <Text
            color={theme.colors.main}
            fontSizeMob={theme.fonts.size.regular.md}
            fontHeightMob={theme.fonts.height.regular.md}
          >
            {email}
          </Text>
        </Styled.TextWrapper>
      </Styled.UserInfo>
      {variant === 'horizontal' ? (
        <ActionIcon
          icon="exit_solid"
          color={theme.colors.grey}
          size={isMob ? theme.icon_sizes.xs : theme.icon_sizes.sm}
          onClick={handleSignOut}
        />
      ) : (
        <Button onClick={handleSignOut} size="sm" isGhost>
          Sign out
        </Button>
      )}
    </Styled.Wrapper>
  )
}
