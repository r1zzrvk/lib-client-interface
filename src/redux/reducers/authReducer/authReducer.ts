import { createSlice } from '@reduxjs/toolkit'
import { ENames } from 'redux/constants'
import { TAuthState } from './types'

const initialState: TAuthState = {
  authorizationStatus: '',
  isAuth: false,
}

export const authReducer = createSlice({
  name: ENames.auth,
  initialState,
  reducers: {},
})
