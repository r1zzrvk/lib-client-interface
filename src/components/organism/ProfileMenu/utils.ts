import { PROFILE_MENU } from '@constants'
import { EProfileTabs, TFirebaseUser } from '@types'
import { isGoogleProvider } from '@utils'

export const filterProfileMenu = (user: TFirebaseUser | null) => {
  if (!user) {
    return []
  }

  const isGoogle = isGoogleProvider(user)

  return PROFILE_MENU.filter(({ title }) => {
    if (isGoogle) {
      return title !== EProfileTabs.ACCOUNT
    }

    return title
  })
}
