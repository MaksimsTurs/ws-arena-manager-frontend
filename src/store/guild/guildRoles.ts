import challanger from './img/challanger.png?format=webp&prest=thumbnail'
import heir from './img/heir.png?format=webp&prest=thumbnail'
import researcher from './img/researcher.png?format=webp&prest=thumbnail'
import rightHand from './img/right-hand.png?format=webp&prest=thumbnail'
import ruler from './img/ruler.png?format=webp&prest=thumbnail'

import { GuildRoles } from './guild.type'

const guildRoles: GuildRoles[] = [
	{
		className: 'Challanger',
		classIcon: challanger,
	},
	{
		className: 'Heir',
		classIcon: heir,
	},
	{
		className: 'Researcher',
		classIcon: researcher,
	},
	{
		className: 'Right Hand',
		classIcon: rightHand,
	},
	{
		className: 'Ruler',
		classIcon: ruler,
	},
]

export default guildRoles