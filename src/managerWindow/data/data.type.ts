export type GameClasses = {
	title: string
	src: string
	roles: ClassRole[]
}

export type ClassRole = {
	title: string
	src: string
}

export type EquipTypes =
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

export type EquipParameters = {
	lvl: number
	type: EquipTypes
	name: string
	icon: string
	physicDefence?: number
	magicDefence?: number
	resilience?: number
	resistance?: number
	health?: number
	magicDamage?: number
	physicDamage?: number
	cooldown?: number
	energyRegeneration?: number
	vampirism?: number
	criticalChance?: number
	energyIncrease?: number
	attackSpeed?: number
	accuracy?: number
	penetration?: number
	rage?: number
	ferocity?: number
}

export type CrystalType = Pick<
	EquipParameters,
	| 'accuracy'
	| 'attackSpeed'
	| 'cooldown'
	| 'criticalChance'
	| 'energyIncrease'
	| 'energyRegeneration'
	| 'magicDamage'
	| 'penetration'
	| 'physicDamage'
	| 'lvl'
	| 'type'
	| 'name'
>

export type RuneType = Pick<
	EquipParameters,
	| 'vampirism'
	| 'resistance'
	| 'resilience'
	| 'physicDefence'
	| 'magicDefence'
	| 'lvl'
	| 'type'
	| 'name'
>

export type Head = Pick<
	EquipParameters,
	| 'physicDefence'
	| 'magicDefence'
	| 'resistance'
	| 'health'
	| 'resilience'
	| 'cooldown'
	| 'accuracy'
	| 'energyIncrease'
	| 'lvl'
	| 'type'
	| 'name'
	| 'icon'
>

export type Body = Pick<
	EquipParameters,
	| 'physicDefence'
	| 'magicDefence'
	| 'health'
	| 'resilience'
	| 'rage'
	| 'lvl'
	| 'type'
	| 'name'
	| 'icon'
	| 'magicDamage'
>

export type Gloves = Pick<
	EquipParameters,
	| 'physicDefence'
	| 'magicDefence'
	| 'accuracy'
	| 'attackSpeed'
	| 'health'
	| 'resilience'
	| 'criticalChance'
	| 'lvl'
	| 'type'
	| 'name'
	| 'icon'
	| 'magicDamage'
>

export type Sash = Pick<
	EquipParameters,
	| 'physicDefence'
	| 'health'
	| 'resilience'
	| 'cooldown'
	| 'energyRegeneration'
	| 'lvl'
	| 'type'
	| 'name'
	| 'icon'
	| 'magicDamage'
>

export type Boots = Pick<
	EquipParameters,
	| 'physicDefence'
	| 'magicDefence'
	| 'cooldown'
	| 'health'
	| 'resilience'
	| 'energyRegeneration'
	| 'attackSpeed'
	| 'lvl'
	| 'type'
	| 'name'
	| 'icon'
>

export type Ring = Pick<
	EquipParameters,
	| 'magicDefence'
	| 'resistance'
	| 'health'
	| 'cooldown'
	| 'energyRegeneration'
	| 'resilience'
	| 'vampirism'
	| 'penetration'
	| 'magicDamage'
	| 'physicDamage'
	| 'lvl'
	| 'type'
	| 'name'
	| 'icon'
>

export type Amulet = Pick<
	EquipParameters,
	| 'magicDefence'
	| 'accuracy'
	| 'criticalChance'
	| 'resistance'
	| 'health'
	| 'resilience'
	| 'vampirism'
	| 'magicDamage'
	| 'physicDamage'
	| 'lvl'
	| 'type'
	| 'name'
	| 'icon'
>

export type Cloak = Pick<
	EquipParameters,
	| 'physicDefence'
	| 'criticalChance'
	| 'energyIncrease'
	| 'energyRegeneration'
	| 'magicDamage'
	| 'vampirism'
	| 'physicDamage'
	| 'resilience'
	| 'lvl'
	| 'type'
	| 'name'
	| 'icon'
>

export type Weapon = Pick<
	EquipParameters,
	| 'magicDamage'
	| 'physicDamage'
	| 'accuracy'
	| 'attackSpeed'
	| 'cooldown'
	| 'criticalChance'
	| 'penetration'
	| 'lvl'
	| 'type'
	| 'name'
	| 'icon'
	| 'ferocity'
>
