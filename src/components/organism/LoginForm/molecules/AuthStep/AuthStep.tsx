import { FC } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { AlertBanner, Button, Spacer, Text } from '@ui-kit'
import { NEW_BOOKMARK_LIST, theme } from '@constants'
import { useAppDispatch, useBreakpoint } from '@hooks'
import { auth, fetchDatabaseDocs, updateBookmarkList } from '@api'
import { setAuthStatus, setUser } from '@reducers'
import { EAuthorizationStatus } from '@types'
import { NoticeMessage } from './constants'
import { StepWrapper } from '../../atoms'

type TAuthStepProps = {
  // Отключено: пока не реализована регистрация и авторизация нового пользователя
  // nextStep: () => void
  onError: () => void
}

export const AuthStep: FC<TAuthStepProps> = ({ onError }) => {
  const dispatch = useAppDispatch()
  const { isMob } = useBreakpoint()
  const googleProvider = new GoogleAuthProvider()

  const createBookmarksForNewUsers = (uid: string) => {
    if (uid) {
      fetchDatabaseDocs(uid).then(response => {
        if (!response) {
          updateBookmarkList({ uid, list: NEW_BOOKMARK_LIST })
        }
      })
    }
  }

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        dispatch(setUser(user))
        dispatch(setAuthStatus(EAuthorizationStatus.AUTH))

        return user
      })
      .then(({ uid }) => createBookmarksForNewUsers(uid))
      .catch(() => {
        onError()
        dispatch(setAuthStatus(EAuthorizationStatus.NO_AUTH))
      })
  }
  // Отключено: пока не реализована регистрация и авторизация нового пользователя
  // const loginAsGuest = () => nextStep()

  return (
    <StepWrapper>
      <Text
        color={theme.colors.grey}
        fontSize={theme.fonts.size.header.lg}
        fontWeight={theme.fonts.weight.medium}
        fontHeight={theme.fonts.height.header.lg}
        fontSizeMob={theme.fonts.size.header.md}
        fontHeightMob={theme.fonts.height.header.md}
        fontWeightMob={theme.fonts.weight.medium}
      >
        Log in
      </Text>
      <Spacer size={theme.space.xl2} sizeMob={theme.space.lg} />
      <Button size="md" onClick={loginWithGoogle} isFluid={isMob}>
        Sign in with Google
      </Button>
      {/* Отключено: пока не реализована регистрация и авторизация нового пользователя */}
      {/* <Button size="md" onClick={loginAsGuest} isGhost>
        Continue as guest
      </Button> */}
      <Spacer size={theme.space.xs} sizeMob={theme.space.xl} />
      <AlertBanner heading={NoticeMessage.heading} icon={NoticeMessage.icon}>
        <Text
          color={theme.colors.grey}
          fontSize={theme.fonts.size.regular.sm}
          fontHeight={theme.fonts.height.regular.sm}
          fontSizeMob={theme.fonts.size.regular.md}
          fontHeightMob={theme.fonts.height.regular.md}
        >
          {NoticeMessage.message}
        </Text>
      </AlertBanner>
    </StepWrapper>
  )
}
