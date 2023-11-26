import { EAuthorizationStatus, TFirebaseUser } from '@types'

export type TAuthState = {
  user: TFirebaseUser | null
  authStatus: EAuthorizationStatus
  isLoading: boolean
}
