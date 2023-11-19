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
import { PlayerEquip } from '../guild/guild.type'
import {
	EquipPosition,
	GameParameters,
} from '@/types/gameParameters.type'

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

export type EquipInitialState = {
	playerEquip: PlayerEquip
	selectedEquip: SelectedEquip
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