export type EquipTypes = 'heavy' | 'leather' | 'rag'

export type EquipPosition =
	| 'head'
	| 'amulet'
	| 'cloak'
	| 'body'
	| 'gloves'
	| 'weapon'
	| 'boots'
	| 'sash'
	| 'ring'
	| 'rightRing'
	| 'leftRing'


export type GameParameters = {
	//Basic information
	lvl: number
	name: string
	icon: string
	type: EquipTypes
	position: EquipPosition

	//Defence parameters
	physicDefence?: number
	magicDefence?: number
	resilience?: number
	resistance?: number
	health?: number
	healtP?: number
	vampirism?: number
	parry?: number
	block?: number
	doge?: number

	//Damage parameters
	magicDamage?: number
	magicDamageP?: number
	physicDamage?: number
	physicDamageP?: number
	criticalChance?: number
	attackSpeed?: number
	accuracy?: number
	penetration?: number
	ferocity?: number

	//Others parameters
	cooldown?: number
	energyRegeneration?: number
	energyIncrease?: number
	rage?: number
}
