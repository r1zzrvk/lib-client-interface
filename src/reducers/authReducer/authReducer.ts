import { createSlice } from '@reduxjs/toolkit'
import { ENames, TAuthState } from './types'

const initialState: TAuthState = {
  authorizationStatus: '',
  isAuth: false,
  user: null,
}

export const authReducer = createSlice({
  name: ENames.auth,
  initialState,
  reducers: {},
})