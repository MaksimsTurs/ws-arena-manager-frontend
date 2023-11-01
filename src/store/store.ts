import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import guildSlice from './guild/guild.slice'
import playerEquipSlice from './playerEquip/playerEquip.slice'

export const rootReducer = combineReducers({
  guildSlice,
  playerEquipSlice
})

const store = configureStore({
  reducer: rootReducer
})

export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type DispatchFunc = () => AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
