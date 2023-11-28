import { RuneAndCrystal } from "./memberEquip.type"

const runeAndCrystal: RuneAndCrystal[] = [
	{
		name: 'magicDamage',
		type: 'crystal',
		equipType: ['staff'],
		lvl: 32,
		buff: 87,
	},
	{
		name: 'physicDamage',
		type: 'crystal',
		equipType: ['bow'],
		lvl: 32,
		buff: 76,
	},
	{
		name: 'physicDamage',
		type: 'crystal',
		equipType: ['crosbow'],
		lvl: 32,
		buff: 90,
	},
	{
		name: 'physicDefence',
		type: 'rune',
		equipType: ['head', 'body', 'gloves', 'boots'],
		lvl: 31,
		buff: 575,
	}
]

export default runeAndCrystal