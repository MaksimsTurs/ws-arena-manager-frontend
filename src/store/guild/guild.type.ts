import {
	Amulet,
	Body,
	Boots,
	Cloak,
	Gloves,
	Head,
	Ring,
	Sash,
	Weapon,
} from '@/managerWindow/tab/addPlayer/data/type/equipParameters.type'
import { GameParameters } from '@/managerWindow/tab/addPlayer/data/type/gameParameters.type'

export type GuildInitialState = {
	guildMembers: PlayerInformation[]
}

export type PlayerInformation = {
	name: string
	discord: boolean
	telegram: boolean
	class: string
	role: string
	level: number
	equip: PlayerEquip
	playerParameters: Partial<GameParameters>
}

export type PlayerEquip = {
	head?: Head
	body?: Body
	gloves?: Gloves
	sash?: Sash
	boots?: Boots
	rightRing?: Ring
	leftRing?: Ring
	amulet?: Amulet
	cloak?: Cloak
	weapon?: Weapon
}
