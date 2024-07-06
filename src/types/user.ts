import { User } from 'firebase/auth'

export type TFirebaseUser = User

export enum EAuthorizationStatus {
  AUTH = 'auth',
  NO_AUTH = 'no-auth',
}
