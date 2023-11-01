import { Amulet, Cloak, Head, Body, Gloves, Weapon, Boots, Sash, Ring } from './data.type'

import _1 from '../editorIMG/equip/1.webp'
import _2 from '../editorIMG/equip/2.webp'
import _3 from '../editorIMG/equip/3.webp'
import _4 from '../editorIMG/equip/4.webp'
import _5 from '../editorIMG/equip/5.webp'
import _6 from '../editorIMG/equip/6.webp'
import _7 from '../editorIMG/equip/7.webp'
import _8 from '../editorIMG/equip/8.webp'
import _9 from '../editorIMG/equip/9.webp'

export const headEquip: Head[] = [
	{
		name: 'Cowl of the Champion Arcanomancer',
		icon: _3,
		lvl: 31,
		type: 'head',
		physicDefence: 145,
		health: 275,
		resilience: 3.5,
		cooldown: 8.1,
	},
]

export const cloakEquip: Cloak[] = [
	{
		name: 'Cloak of Greatness',
		icon: _1,
		lvl: 32,
		type: 'cloak',
		physicDefence: 265,
		energyRegeneration: 15,
		magicDamage: 15,
		resilience: 3.5,
	},
]

export const amuletEquip: Amulet[] = [
	{
		name: 'Symbol of Greatness',
		icon: _2,
		lvl: 32,
		type: 'amulet',
		magicDefence: 715,
		health: 365,
		magicDamage: 15,
		resilience: 3.5,
	},
]

export const bodyEquip: Body[] = [
	{
		name: 'Vestments of the Champion Arcanomance',
		lvl: 31,
		icon: _4,
		type: 'body',
		physicDefence: 226,
		health: 275,
		resilience: 4.1,
		magicDamage: 35
	}
]

export const gloveEquip: Gloves[] = [
	{
		name: 'Wristguards of the Champion Arcanomancer',
		icon: _5,
		lvl: 31,
		type: 'gloves',
		physicDefence: 145,
		health: 275,
		resilience: 3.4,
		magicDamage: 32
	}
]

export const weaponEquip: Weapon[] = [
	{
		name: 'Staff of the Greatest Secutor',
		lvl: 31,
		icon: _6,
		type: 'weapon',
		accuracy: 7.6,
		ferocity: 26.1,
		magicDamage: 216,
		penetration: 6.8
	}
]

export const bootsEquip: Boots[] = [
	{
		name: 'Boots of the Champion Arcanomancer',
		lvl: 31,
		icon: _7,
		type: 'boots',
		physicDefence: 145,
		health: 275,
		resilience: 3.4,
		cooldown: 8.1
	}
]

export const sashEquip: Sash[] = [
	{
		name: 'Belt of the Champion Arcanomancer',
		lvl: 31, 
		icon: _8,
		type: 'sash',
		physicDefence: 145,
		health: 245,
		resilience: 3.4,
		magicDamage: 32
	}
]

export const ringEquip: Ring[] = [
	{
		name: 'Ring of Greatness',
		icon: _9,
		type: 'ring',
		lvl: 32,
		magicDefence: 470,
		health: 293,
		magicDamage: 10,
		resilience: 2.1
	}
]