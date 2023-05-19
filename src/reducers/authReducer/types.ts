import { TGuestUser } from '@types'

export type TAuthState = {
  authorizationStatus: string
  isAuth: boolean
  user: TGuestUser | null
}

export enum ENames {
  auth = 'auth',
}
