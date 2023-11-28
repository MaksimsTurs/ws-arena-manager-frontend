import { GameClasses, ClassRoles } from '@/types/class.type'
import { GameParameters } from '@/types/gameParameters.type'
import { MemberEquip } from '../memberEquip/memberEquip.type'

export type GuildInitialState = {
	memberToEdit?: MemberInformation
	memberToCompare?: MemberInformation
	guild: Guild | null
	isKicked: boolean
	isChanged: boolean
	isAdded: boolean
}

export type Guild = {
	name: string
	lvl: number
	maxMembers: number
	guildMembers: MemberInformation[]
	guildBuffs?: { [key: string]: number }
	buffRequiredLVL?: { name: string; requiredLVL: number }[]
}

export type GuildRoles = {
	className: string
	classIcon: string
}

export type GuildBuffInformation = {
	guildBuffName: string
	guildBuffs: {
		0: { buffNames: string[]; buffPercentages: number[]; requiredLVL: number }
		1: { buffNames: string[]; buffPercentages: number[]; requiredLVL: number }
		2: { buffNames: string[]; buffPercentages: number[]; requiredLVL: number }
		3: { buffNames: string[]; buffPercentages: number[]; requiredLVL: number }
	}[]
}

export type MemberInformation = {
	id: string
	name: string
	discord: boolean
	telegram: boolean
	level: number
	guildRole: GuildRoles
	class: GameClasses
	role: ClassRoles
	equip: MemberEquip
	playerParameters: Partial<GameParameters>
}

export type ChangeGuildBuffAction = {
	requiredLVL: number
	buffNames: string[]
	buffPercentages: number[]
}

export type CreateGuildAction = {
	name: string
	lvl: number
}
