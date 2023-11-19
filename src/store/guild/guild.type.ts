import { GameClasses, ClassRoles } from '@/types/class.type'
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
} from '@/types/equipParameters.type'
import { GameParameters } from '@/types/gameParameters.type' 

export type PlayerInformation = {
	id: string
	name: string
	discord: boolean
	telegram: boolean
	guildRole: GuildRoles
	class: GameClasses
	role: ClassRoles
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

export type GuildInitialState = {
	guildMembers: PlayerInformation[]
	isKicked: boolean
	isChanged: boolean
	isAdded: boolean
}

export type GuildRoles = {
	className: string
	classIcon: string	
}