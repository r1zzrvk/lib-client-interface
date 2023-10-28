import { User } from 'firebase/auth'

export type TUser = {
  id: string
  firstName: string
  surName: string
  avatar: string
  email: string
}

// deprecated
export type TGuestUser = {
  firstName: string
  lastName: string
  avatar: string
  isGuest: boolean
}

export type TFirebaseUser = User

export enum EAuthorizationStatus {
  AUTH = 'auth',
  NO_AUTH = 'no-auth',
}
