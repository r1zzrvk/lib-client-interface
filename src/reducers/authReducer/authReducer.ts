import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { EAuthorizationStatus, TFirebaseUser } from '@types'
import { ESliceName } from 'reducers/types'
import { TAuthState } from './types'

const initialState: TAuthState = {
  user: null,
  authStatus: EAuthorizationStatus.NO_AUTH,
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
  },
})

export const { setUser, setAuthStatus } = authReducer.actions
