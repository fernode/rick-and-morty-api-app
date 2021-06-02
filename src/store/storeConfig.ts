import {
  configureStore,
  combineReducers,
  Action,
  ThunkAction
} from '@reduxjs/toolkit'

import characters from './slices/charactersSlice'

const reducer = combineReducers({ characters })

const store = configureStore({ reducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store
