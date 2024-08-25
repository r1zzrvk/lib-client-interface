import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@reducers'

export const rootReducer = combineReducers({
  auth: authReducer.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
