import {
	EquipParameters,
	Amulet,
	Body,
	Boots,
	Cloak,
	Gloves,
	Weapon,
	Sash,
	Ring,
	Head,
} from '@/managerWindow/data/data.type'

export type GuildInitialState = {
  guildMembers: PlayerInformation[]
  memberAdded: boolean
}

export type PlayerInformation = {
	name: string
	discord: boolean
	telegram: boolean
	class: string
	role: string
	level: number
	equip: PlayerEquip
	playerParameters: Partial<EquipParameters>
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
