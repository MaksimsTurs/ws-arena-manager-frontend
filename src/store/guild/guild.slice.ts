import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { GuildInitialState, PlayerInformation } from './guild.type'
import { EquipParameters } from '@/managerWindow/data/data.type'

const initialState: GuildInitialState = {
	guildMembers: JSON.parse(localStorage.getItem('guild') || '[]'),
  memberAdded: false
}

const guildSlice = createSlice({
	initialState,
	name: 'guild',
	reducers: {
		addPlayerToList: (state, { payload }: PayloadAction<PlayerInformation>) => {
			console.log(payload)
			state.memberAdded = false
      let playerParameters: Partial<EquipParameters> = {}
			let guildMembers: PlayerInformation[] = state.guildMembers
			let guildMemer = {
				name: payload.name,
				class: payload.class,
				level: payload.level,
				role: payload.role,
				discord: payload.discord,
				telegram: payload.telegram,
				equip: payload.equip,
				playerParameters: {},
			}

			const equipValues = Object.values(payload.equip)
			for (let index = 0; index < equipValues.length; index++) {
				const equipEntries = Object.entries(equipValues[index])
				for (let [key, value] of equipEntries) {
					if (Object.hasOwn(playerParameters, key)) {
						playerParameters = {
							...playerParameters,
							//@ts-ignore
							[key]: playerParameters[key] + value,
						}
					} else {
						playerParameters = { ...playerParameters, [key]: value }
					}
				}
			}
			delete playerParameters.name
			delete playerParameters.icon
			delete playerParameters.lvl
			delete playerParameters.type

			guildMemer = {...guildMemer, playerParameters }

			state.guildMembers = [...state.guildMembers, guildMemer]
      state.memberAdded = !(state.guildMembers === guildMembers)

			localStorage.setItem('guild', JSON.stringify(state.guildMembers))
		},
	},
})

export const { addPlayerToList } = guildSlice.actions
export default guildSlice.reducer
