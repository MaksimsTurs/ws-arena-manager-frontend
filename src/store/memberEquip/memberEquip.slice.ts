import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
	EquipInitialState,
	MemberEquip,
	PullOpOnEquip,
	RuneAndCrystal,
	SelectedEquip,
} from './memberEquip.type'

const initialState: EquipInitialState = {
	memberEquip: {},
	selectedEquip: undefined,
}

const memberEquipSlice = createSlice({
	initialState,
	name: 'player-equip',
	reducers: {
		pullOn: (state, { payload }: PayloadAction<PullOpOnEquip>) => {
			const currentEquip = Object.entries(state.memberEquip || {})
			if (currentEquip.length === 0) {
				state.memberEquip = {	[payload.equipPosition || payload.equip.position]: { ...payload.equip }
				}
			} else {
				state.memberEquip = {
					...state.memberEquip,
					[payload.equipPosition || payload.equip.position]: {
						...payload.equip,
					},
				}
			}
		},
		pullUp: (state, { payload }: PayloadAction<string>) => {
			Reflect.deleteProperty(state.memberEquip, payload)
			state.memberEquip = { ...state.memberEquip }
		},
		selectEquipToCheck: (state, { payload }: PayloadAction<SelectedEquip | undefined>) => {
			state.selectedEquip = payload
		},
		setPlayerEquip: (state, { payload }: PayloadAction<MemberEquip>) => {
			const equipEntries = Object.entries(payload)
			if (equipEntries.length === 0) {
				state.memberEquip = payload
			} else {
				for (let [key, value] of equipEntries) state.memberEquip = { ...state.memberEquip, [key]: value }
			}
		},
		buffEquipWith: (state, { payload }: PayloadAction<RuneAndCrystal>) => {
			//@ts-ignore
			if (state.memberEquip[state.selectedEquip?.position!]) {
				//@ts-ignore
				if (state.memberEquip[state.selectedEquip?.position!]?.[payload.type]) {
					//@ts-ignore
					delete state.memberEquip[state.selectedEquip?.position!][payload.type]
				} else {
					state.memberEquip = {
						...state.memberEquip,
						[state.selectedEquip?.position!]: {
							...state.selectedEquip,
							[payload.type]: { [payload.name]: payload.buff },
						},
					}
				}
			} else {
				//@ts-ignore
				if (state.selectedEquip?.[payload.type]) {
					delete state.selectedEquip[payload.type]
				} else {
					state.selectedEquip = {
						...state.selectedEquip!,
						[payload.type]: { [payload.name]: payload.buff },
					}
				}
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
} = memberEquipSlice.actions
export default memberEquipSlice.reducer
