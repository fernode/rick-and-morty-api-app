import { configureStore, combineReducers } from '@reduxjs/toolkit'
import charactersSlice from './slices/charactersSlice'

const reducer = combineReducers({ charactersSlice })

const store = configureStore({ reducer })
