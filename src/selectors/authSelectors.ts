import { createSelector } from 'reselect'
import { RootState } from '@store'

const getAuthState = ({ auth }: RootState) => auth

export const getUserData = createSelector(getAuthState, ({ user }) => user)
