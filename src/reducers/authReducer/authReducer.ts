import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ESliceName } from 'reducers/types'

import { EAuthorizationStatus, TFirebaseUser } from '@types'

import { TAuthState } from './types'

const initialState: TAuthState = {
  user: null,
  authStatus: EAuthorizationStatus.NO_AUTH,
  isLoading: false,
}

export const authReducer = createSlice({
  name: ESliceName.auth,
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<TFirebaseUser | null>) {
      state.user = payload
    },
    setAuthStatus(state, { payload }: PayloadAction<EAuthorizationStatus>) {
      state.authStatus = payload
    },
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload
    },
  },
})

export const { setUser, setAuthStatus, setIsLoading } = authReducer.actions
