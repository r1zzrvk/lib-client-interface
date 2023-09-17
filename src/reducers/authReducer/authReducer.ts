import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TFirebaseUser } from '@types'
import { ESliceName } from 'reducers/types'
import { TAuthState } from './types'

const initialState: TAuthState = {
  user: null,
}

export const authReducer = createSlice({
  name: ESliceName.auth,
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<TFirebaseUser | null>) {
      state.user = payload
    },
  },
})

export const { setUser } = authReducer.actions
