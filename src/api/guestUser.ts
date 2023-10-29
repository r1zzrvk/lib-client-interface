import { ALREADY_CREATED_MESSAGE, GUEST_USER, NOT_YET_CREATED_MESSAGE } from '@constants'
import { TGuestUser } from '@types'

// deprecated
// TODO: delete it with constants and types

export const setGuestUser = (user: TGuestUser): void | string => {
  if (localStorage?.getItem(GUEST_USER) === null) {
    return localStorage.setItem(GUEST_USER, JSON.stringify(user))
  }

  return ALREADY_CREATED_MESSAGE
}

export const getGuestUser = (): TGuestUser | string => {
  if (localStorage?.getItem(GUEST_USER) === null) {
    return NOT_YET_CREATED_MESSAGE
  }

  return JSON.parse(localStorage?.getItem(GUEST_USER) || '')
}

export const removeGuestUser = (): void | string => {
  if (localStorage?.getItem(GUEST_USER) !== null) {
    return localStorage.removeItem(GUEST_USER)
  }

  return NOT_YET_CREATED_MESSAGE
}
