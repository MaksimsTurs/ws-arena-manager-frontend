import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
	GuildInitialState,
	MemberInformation,
	ChangeGuildBuffAction,
	CreateGuildAction,
} from './guild.type'

import calculateMemberParameters from './helper/calculateMemberParam/calculateMemberParam.helper'
import isDataChanged from './helper/isDataChanged.util'
import setMaxGuildMembers from './helper/setMaxGuildMembers.util'

const initialState: GuildInitialState = {
	guild: JSON.parse(localStorage.getItem('guild') || 'null'),
	memberToEdit: undefined,
	memberToCompare: undefined,
	isChanged: false,
	isKicked: false,
	isAdded: false,
}

const guildSlice = createSlice({
	initialState,
	name: 'guild',
	reducers: {
		addPlayerToList: (state, { payload }: PayloadAction<MemberInformation>) => {
			if (state.guild && state.guild.maxMembers <= state.guild.guildMembers.length) return

			let lengthAfterAdd: number = state.guild!.guildMembers.length
			let lengthBeforeAdd: number = 0

			let guildMemer: MemberInformation = {
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

			guildMemer.playerParameters = calculateMemberParameters({	memberEquip: payload.equip,	guildBuffs: state.guild?.guildBuffs })

			lengthBeforeAdd = state.guild!.guildMembers.length

			state.guild!.guildMembers = [...state.guild!.guildMembers, {...guildMemer, playerParameters: guildMemer.playerParameters}]

			state.isAdded = lengthAfterAdd !== lengthBeforeAdd ? false : true

			localStorage.setItem('guild', JSON.stringify(state.guild))
		},
		changeMemberData: (state, { payload }: PayloadAction<MemberInformation>) => {
			const filteredGuild: MemberInformation[] = state.guild!.guildMembers.filter(memberData => memberData.id !== payload.id)
			const currentMemeberData: MemberInformation = state.guild!.guildMembers.find(member => member.id === payload.id)!

			let memberNewData: MemberInformation = {
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

			memberNewData.playerParameters = calculateMemberParameters({ memberEquip: payload.equip, guildBuffs: state.guild?.guildBuffs })

			state.guild!.guildMembers = [...filteredGuild, {...memberNewData, playerParameters: memberNewData.playerParameters}]
			state.memberToEdit = memberNewData

			localStorage.setItem('guild', JSON.stringify(state.guild))

			state.isChanged = isDataChanged(currentMemeberData, memberNewData)
		},
		kickMember: (state, { payload }: PayloadAction<string>) => {
			let lengthAfterAdd: number = state.guild!.guildMembers.length
			let lengthBeforeAdd: number = 0

			state.guild!.guildMembers = state.guild!.guildMembers.filter(member => member.id !== payload)

			lengthBeforeAdd = state.guild!.guildMembers.length

			localStorage.setItem('guild', JSON.stringify(state.guild))

			state.isKicked = lengthAfterAdd !== lengthBeforeAdd ? true : false
		},
		findGuildMember: (state, { payload }: PayloadAction<string>) => {
			const cachedGuildMember: MemberInformation[] = JSON.parse(localStorage.getItem('guild') || '[]')

			if (payload.length === 0) state.guild!.guildMembers = cachedGuildMember

			state.guild!.guildMembers = cachedGuildMember.filter(member => member.name.toLowerCase().search(payload.toLowerCase()) === 0)
		},
		selectMember: (state, { payload }: PayloadAction<MemberInformation | undefined>) => {
			state.memberToEdit = payload
		},
		selectMemberToCompare: (state, { payload }: PayloadAction<MemberInformation | undefined>) => {
			state.memberToCompare = payload
		},
		changeGuildBuff: (state, { payload }: PayloadAction<ChangeGuildBuffAction>) => {
			if (!state.guild) {
				for (let index = 0; index < payload.buffNames.length; index++) {
					state.guild = {
						lvl: 0,
						name: '',
						maxMembers: 0,
						guildMembers: [],
						buffRequiredLVL: [{	name: payload.buffNames[index], requiredLVL: payload.requiredLVL }],
						guildBuffs: {	[payload.buffNames[index]]: payload.buffPercentages[index] }
					}
				}
			} else {
				for (let index = 0; index < payload.buffNames.length; index++) {
					state.guild = {
						...state.guild,
						buffRequiredLVL: state.guild.buffRequiredLVL
							? [...state.guild.buffRequiredLVL!, { name: payload.buffNames[index], requiredLVL: payload.requiredLVL }]
							: [{ name: payload.buffNames[index], requiredLVL: payload.requiredLVL	}],
						guildBuffs: {...state.guild.guildBuffs, [payload.buffNames[index]]: payload.buffPercentages[index]}
					}
				}
				state.guild!.guildBuffs!
			}
		},
		createGuild: (state, { payload }: PayloadAction<CreateGuildAction>) => {
			if (state.guild && state.guild.buffRequiredLVL) {
				for (let index = 0; index < state.guild!.buffRequiredLVL!.length; index++) {
					const buffData = state.guild.buffRequiredLVL[index]
					if (buffData.requiredLVL > payload.lvl) delete state.guild.guildBuffs![payload.name]
				}
				delete state.guild!.buffRequiredLVL
			}

			state.guild = {
				...state.guild!,
				name: payload.name,
				lvl: payload.lvl,
				maxMembers: setMaxGuildMembers(payload.lvl),
				guildMembers: state.guild?.guildMembers
					? [...state.guild.guildMembers.map(member => {
								const newCalculatedParams = calculateMemberParameters({ memberEquip: member.equip, guildBuffs: state.guild?.guildBuffs }) 
								return {
									...member,
									playerParameters: newCalculatedParams
								}
							})
						]
					: []
			}

			localStorage.setItem('guild', JSON.stringify(state.guild))
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
	resetIsAdded,
	resetIsChanged,
	resetIsKicked,

	selectMember,
	selectMemberToCompare,
	
	changeGuildBuff,
	changeMemberData,
	
	addPlayerToList,
	createGuild,
	
	kickMember,
	findGuildMember,
} = guildSlice.actions
export default guildSlice.reducer
