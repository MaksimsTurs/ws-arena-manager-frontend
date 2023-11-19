import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
	EquipInitialState,
	PullOpOnEquip,
	RuneAndCrystal,
	SelectedEquip,
} from './playerEquip.type'
import { PlayerEquip } from '../guild/guild.type'

const initialState: EquipInitialState = {
	playerEquip: {},
	selectedEquip: undefined
}

const playerEquipSlice = createSlice({
	initialState,
	name: 'player-equip',
	reducers: {
		pullOn: (state, { payload }: PayloadAction<PullOpOnEquip>) => {
			const currentEquip = Object.entries(state.playerEquip || {})
			if (currentEquip.length === 0) {
				state.playerEquip = {
					[payload.equipPosition || payload.equip.position]: {
						...payload.equip,
					},
				}
			} else {
				state.playerEquip = {
					...state.playerEquip,
					[payload.equipPosition || payload.equip.position]: {
						...payload.equip,
					},
				}
			}
		},
		pullUp: (state, { payload }: PayloadAction<string>) => {
			Reflect.deleteProperty(state.playerEquip, payload)
			state.playerEquip = { ...state.playerEquip }
		},
		selectEquipToCheck: (
			state,
			{ payload }: PayloadAction<SelectedEquip | undefined>
		) => {
			state.selectedEquip = payload
		},
		setPlayerEquip: (state, { payload }: PayloadAction<PlayerEquip>) => {
			const equipEntries = Object.entries(payload)

			if (equipEntries.length === 0) state.playerEquip = {}
			for (let [key, value] of equipEntries) {
				state.playerEquip = { ...state.playerEquip, [key]: value }
			}
		},
		buffEquipWith: (
			state,
			{ payload }: PayloadAction<RuneAndCrystal>
		) => {
			//TODO: Fix type error!
			//@ts-ignore
			state.selectedEquip = {
				...state.selectedEquip,
				[payload.type]: {
					[payload.name]: payload.buff,
				},
			}
		},
	},
})

export const {
	pullUp,
	pullOn,
	setPlayerEquip,
	selectEquipToCheck,
	buffEquipWith,
} = playerEquipSlice.actions
export default playerEquipSlice.reducer
