import { ALREADY_CREATED_MESSAGE, GUEST_USER, NOT_YET_CREATED_MESSAGE } from '@constants'
import { TGuestUser } from '@types'

const getLocalUser = localStorage.getItem(GUEST_USER)

export const setGuestUser = (user: TGuestUser): void | string => {
  if (getLocalUser === null) {
    return localStorage.setItem(GUEST_USER, JSON.stringify(user))
  }

  return ALREADY_CREATED_MESSAGE
}

export const getGuestUser = (): TGuestUser | string => {
  if (getLocalUser === null) {
    return NOT_YET_CREATED_MESSAGE
  }

  return JSON.parse(getLocalUser || '')
}

export const removeGuestUser = (): void | string => {
  if (getLocalUser !== null) {
    return localStorage.removeItem(GUEST_USER)
  }

  return NOT_YET_CREATED_MESSAGE
}
