import { createSelector } from 'reselect'
import { RootState } from '@store'
import { EAuthorizationStatus } from '@types'

const getAuthState = ({ auth }: RootState) => auth

export const getUserData = createSelector(getAuthState, ({ user }) => user)
export const getAuthStatus = createSelector(getAuthState, ({ authStatus }) => authStatus)
export const getUserAuth = createSelector(getAuthState, ({ authStatus }) => authStatus === EAuthorizationStatus.AUTH)
export const getLoading = createSelector(getAuthState, ({ isLoading }) => isLoading)
