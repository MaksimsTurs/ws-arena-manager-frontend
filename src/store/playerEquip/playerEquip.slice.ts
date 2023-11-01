import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ChoseEquip, PlayerInitialState } from './playerEquip.type'

const initialState: PlayerInitialState = {
	playerEquip: {},
}

const playerEquipSlice = createSlice({
	initialState,
	name: 'player-equip',
	reducers: {
		choseEquip: (state, { payload }: PayloadAction<ChoseEquip>) => {
			const currentEquip = Object.keys(state.playerEquip || {})
			if (currentEquip.length === 0)
				state.playerEquip = {
					[payload.equipType || payload.equip.type]: { ...payload.equip },
				}
			for (let index = 0; index < currentEquip.length; index++) {
				if (payload.equip.type.includes(currentEquip[index])) {
					// @ts-ignore
					delete state.playerEquip[currentEquip[index]]
					state.playerEquip = { ...state.playerEquip }
				} else {
					state.playerEquip = {
						...state.playerEquip,
						[payload.equipType || payload.equip.type]: { ...payload.equip },
					}
				}
			}
		},
	},
})

export const { choseEquip } = playerEquipSlice.actions
export default playerEquipSlice.reducer
