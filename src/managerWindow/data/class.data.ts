import druid from '../classIMG/druid.png?format=webp&prest=thumbnail'
import ranger from '../classIMG/ranger.png?format=webp&prest=thumbnail'
import bladeDancer from '../classIMG/blade_dancer.png?format=webp&prest=thumbnail'
import warden from '../classIMG/warden.png?format=webp&prest=thumbnail'
import beastmaster from '../classIMG/beastmaster.png?format=webp&prest=thumbnail'
import paladin from '../classIMG/paladin.png?format=webp&prest=thumbnail'
import priest from '../classIMG/priest.png?format=webp&prest=thumbnail'
import mage from '../classIMG/mag.png?format=webp&prest=thumbnail'
import seeker from '../classIMG/seeker.png?format=webp&prest=thumbnail'
import templar from '../classIMG/templar.png?format=webp&prest=thumbnail'

import { GameClasses } from './data.type'

import attack from '../roleIMG/attack.png'
import tank from '../roleIMG/tank.png'
import support from '../roleIMG/support.png'

const gameClasses: GameClasses[] = [
	{
		title: 'Druid',
		src: druid,
		roles: [
			{ title: 'Attack', src: attack },
			{ title: 'Support', src: support },
		],
	},
	{
		title: 'Ranger',
		src: ranger,
		roles: [{ title: 'Attack', src: attack }],
	},
	{
		title: 'Blade Dancer',
		src: bladeDancer,
		roles: [
			{ title: 'Attack', src: attack },
			{ title: 'Tank', src: tank },
		],
	},
	{
		title: 'Warden',
		src: warden,
		roles: [
			{ title: 'Attack', src: attack },
			{ title: 'Tank', src: tank },
		],
	},
	{
		title: 'Beastmaster',
		src: beastmaster,
		roles: [
			{ title: 'Attack', src: attack },
			{ title: 'Support', src: support },
		],
	},
	{
		title: 'Paladin',
		src: paladin,
		roles: [
			{ title: 'Attack', src: attack },
			{ title: 'Support', src: support },
			{ title: 'Tank', src: tank },
		],
	},
	{
		title: 'Priest',
		src: priest,
		roles: [
			{ title: 'Attack', src: attack },
			{ title: 'Support', src: support },
		],
	},
	{
		title: 'Mage',
		src: mage,
		roles: [
			{ title: 'Attack', src: attack },
			{ title: 'Tank', src: tank },
			{ title: 'Support', src: support },
		],
	},
	{
		title: 'Seeker',
		src: seeker,
		roles: [{ title: 'Attack', src: attack }],
	},
	{
		title: 'Templar',
		src: templar,
		roles: [
			{ title: 'Tank', src: tank },
			{ title: 'Support', src: support },
		],
	},
]

export default gameClasses
