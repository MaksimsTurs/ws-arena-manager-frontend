import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GuildInitialState, PlayerInformation } from './guild.type'

import calculateMemberParameters from './helper/calculateMemberParam/calculateMemberParam.helper'
import isDataChanged from './helper/isDataChanged.util'

const initialState: GuildInitialState = {
	guildMembers: JSON.parse(localStorage.getItem('guild') || '[]'),
	isChanged: false,
	isKicked: false,
	isAdded: false,
}

const guildSlice = createSlice({
	initialState,
	name: 'guild',
	reducers: {
		addPlayerToList: (state, { payload }: PayloadAction<PlayerInformation>) => {
			let lengthAfterAdd = state.guildMembers.length
			let lengthBeforeAdd = 0
			let guildMemer: PlayerInformation = {
				id: payload.id,
				name: payload.name,
				guildRole: payload.guildRole,
				class: payload.class,
				level: payload.level,
				role: payload.role,
				discord: payload.discord,
				telegram: payload.telegram,
				equip: payload.equip,
				playerParameters: {},
			}

			guildMemer.playerParameters = calculateMemberParameters({	memberEquip: payload.equip })

			guildMemer = {...guildMemer, playerParameters: guildMemer.playerParameters}

			lengthBeforeAdd = state.guildMembers.length

			state.guildMembers = [...state.guildMembers, guildMemer]

			localStorage.setItem('guild', JSON.stringify(state.guildMembers))

			state.isAdded = lengthAfterAdd !== lengthBeforeAdd ? false : true
		},
		changeMemberData: (state, { payload }: PayloadAction<PlayerInformation>) => {
			const filteredGuild = state.guildMembers.filter(memberData => memberData.id !== payload.id)
			const currentMemeberData = state.guildMembers.find(member => member.id === payload.id)!
			let memberNewData: PlayerInformation = {
				id: payload.id,
				name: payload.name,
				guildRole: payload.guildRole,
				class: payload.class,
				level: payload.level,
				role: payload.role,
				discord: payload.discord,
				telegram: payload.telegram,
				equip: payload.equip,
				playerParameters: {},
			}

			console.log(payload)

			memberNewData.playerParameters = calculateMemberParameters({ memberEquip: payload.equip })

			memberNewData = {...memberNewData, playerParameters: memberNewData.playerParameters}

			state.guildMembers = [...filteredGuild, memberNewData]

			localStorage.setItem('guild', JSON.stringify(state.guildMembers))

			state.isChanged = isDataChanged(currentMemeberData, memberNewData)
		},
		kickMember: (state, { payload }: PayloadAction<string>) => {
			let lengthAfterAdd = state.guildMembers.length
			let lengthBeforeAdd = 0

			state.guildMembers = state.guildMembers.filter(member => member.id !== payload)

			lengthBeforeAdd = state.guildMembers.length

			localStorage.setItem('guild', JSON.stringify(state.guildMembers))
			console.log(lengthAfterAdd, lengthBeforeAdd)
			state.isKicked = lengthAfterAdd !== lengthBeforeAdd ? true : false
		},
		findGuildMember: (state, { payload }: PayloadAction<string>) => {
			const cachedGuildMember: PlayerInformation[] = JSON.parse(localStorage.getItem('guild') || '[]')
			if(payload.length === 0) state.guildMembers = cachedGuildMember

			state.guildMembers = cachedGuildMember.filter(member => member.name.search(payload) === 0)
		},
		resetIsAdded: state => {
			state.isAdded = false
		},
		resetIsChanged: state => {
			state.isChanged = false
		},
		resetIsKicked: state => {
			state.isKicked = false
		},
	},
})

export const {
	addPlayerToList,
	kickMember,
	changeMemberData,
	resetIsAdded,
	resetIsChanged,
	resetIsKicked,
	findGuildMember
} = guildSlice.actions
export default guildSlice.reducer
