import {
	Head,
	Amulet,
	Body,
	Boots,
	Cloak,
	Gloves,
	Ring,
	Sash,
	Weapon,
} from '@/types/equipParameters.type'
import { EquipPosition, GameParameters } from '@/types/gameParameters.type'

export type EquipInitialState = {
	memberEquip: MemberEquip
	selectedEquip: SelectedEquip
}

export type SelectedEquip =
	| Head
	| Amulet
	| Body
	| Boots
	| Cloak
	| Gloves
	| Ring
	| Sash
	| Weapon
	| undefined

export type MemberEquip = {
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

export type PullOpOnEquip = {
	equipPosition: EquipPosition | string
	equip: GameParameters
}

export type RuneAndCrystal = {
	name: string
	type: 'crystal' | 'rune'
	equipType: string[]
	lvl: number
	buff: number
}
