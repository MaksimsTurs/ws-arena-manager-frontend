import druid from '../img/gameClasses/druid.png?format=webp&prest=thumbnail'
import ranger from '../img/gameClasses/ranger.png?format=webp&prest=thumbnail'
import bladeDancer from '../img/gameClasses/blade_dancer.png?format=webp&prest=thumbnail'
import warden from '../img/gameClasses/warden.png?format=webp&prest=thumbnail'
import beastmaster from '../img/gameClasses/beastmaster.png?format=webp&prest=thumbnail'
import paladin from '../img/gameClasses/paladin.png?format=webp&prest=thumbnail'
import priest from '../img/gameClasses/priest.png?format=webp&prest=thumbnail'
import mage from '../img/gameClasses/mag.png?format=webp&prest=thumbnail'
import seeker from '../img/gameClasses/seeker.png?format=webp&prest=thumbnail'
import templar from '../img/gameClasses/templar.png?format=webp&prest=thumbnail'

import { GameClasses } from './data.type'

import attack from '../img/classRoles/attack.png?format=webp&prest=thumbnail'
import tank from '../img/classRoles/tank.png?format=webp&prest=thumbnail'
import support from '../img/classRoles/support.png?format=webp&prest=thumbnail'

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
