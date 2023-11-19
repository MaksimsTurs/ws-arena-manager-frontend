import { GameParameters } from './gameParameters.type'

export type BasicEquipParameters = {
	rune: GameParameters
	crystal: GameParameters
} & Pick<GameParameters, 'lvl' | 'name' | 'icon' | 'type' | 'position'>

export type Head = Pick<
	GameParameters,
	| 'physicDefence'
	| 'health'
	| 'accuracy'
	| 'cooldown'
	| 'resistance'
	| 'parry'
	| 'energyIncrease'
> &
	Required<BasicEquipParameters>

export type Body = Pick<
	GameParameters,
	| 'physicDefence'
	| 'health'
	| 'accuracy'
	| 'cooldown'
	| 'resistance'
	| 'parry'
	| 'energyIncrease'
> &
	Required<BasicEquipParameters>

export type Gloves = Pick<
	GameParameters,
	| 'accuracy'
	| 'attackSpeed'
	| 'criticalChance'
	| 'health'
	| 'magicDamage'
	| 'penetration'
	| 'physicDefence'
	| 'resistance'
> &
	Required<BasicEquipParameters>

export type Sash = Pick<
	GameParameters,
	| 'block'
	| 'cooldown'
	| 'criticalChance'
	| 'energyRegeneration'
	| 'health'
	| 'magicDamage'
	| 'healtP'
	| 'penetration'
	| 'resilience'
> &
	Required<BasicEquipParameters>

export type Boots = Pick<
	GameParameters,
	| 'attackSpeed'
	| 'cooldown'
	| 'doge'
	| 'energyRegeneration'
	| 'health'
	| 'magicDamage'
	| 'resilience'
	| 'physicDefence'
> &
	Required<BasicEquipParameters>

export type Ring = Pick<
	GameParameters,
	| 'cooldown'
	| 'doge'
	| 'energyRegeneration'
	| 'health'
	| 'magicDamage'
	| 'magicDamageP'
	| 'magicDefence'
	| 'penetration'
	| 'physicDamage'
	| 'physicDamageP'
	| 'vampirism'
	| 'resilience'
> &
	Required<BasicEquipParameters>

export type Amulet = Pick<
	GameParameters,
	| 'accuracy'
	| 'criticalChance'
	| 'energyRegeneration'
	| 'health'
	| 'magicDamage'
	| 'magicDamageP'
	| 'physicDamage'
	| 'magicDefence'
	| 'physicDamageP'
	| 'vampirism'
	| 'resilience'
> &
	Required<BasicEquipParameters>

export type Cloak = Pick<
	GameParameters,
	| 'physicDefence'
	| 'criticalChance'
	| 'energyIncrease'
	| 'energyRegeneration'
	| 'magicDamage'
	| 'vampirism'
	| 'magicDamageP'
	| 'physicDamageP'
	| 'physicDamage'
	| 'resilience'
> &
	Required<BasicEquipParameters>

export type Weapon = Pick<
	GameParameters,
	| 'magicDamage'
	| 'doge'
	| 'parry'
	| 'physicDamage'
	| 'accuracy'
	| 'attackSpeed'
	| 'cooldown'
	| 'criticalChance'
	| 'penetration'
	| 'ferocity'
> &
	Required<BasicEquipParameters>
