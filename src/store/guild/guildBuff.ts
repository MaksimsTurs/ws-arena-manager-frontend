import { GuildBuffInformation } from './guild.type'

const guildBuff: GuildBuffInformation[] = [
	{
		guildBuffName: 'Guild Physical Defense',
		guildBuffs: [
			{
				0: { buffNames: ['physicDefenceP'], buffPercentages: [0], requiredLVL: 1 },
				1: { buffNames: ['physicDefenceP'], buffPercentages: [0.05], requiredLVL: 1 },
				2: { buffNames: ['physicDefenceP'], buffPercentages: [0.1], requiredLVL: 1 },
				3: { buffNames: ['physicDefenceP'], buffPercentages: [0.15], requiredLVL: 1 }
			},
		],
	},
	{
		guildBuffName: 'Guild Magic Defense',
		guildBuffs: [
			{
				0: { buffNames: ['magicDefenceP'], buffPercentages: [0], requiredLVL: 2 },
				1: { buffNames: ['magicDefenceP'], buffPercentages: [0.05], requiredLVL: 2 },
				2: { buffNames: ['magicDefenceP'], buffPercentages: [0.1], requiredLVL: 2 },
				3: { buffNames: ['magicDefenceP'], buffPercentages: [0.15], requiredLVL: 2 }
			}
		],
	},
	{
		guildBuffName: 'Guild Health',
		guildBuffs: [
			{
				0: { buffNames: ['healthP'], buffPercentages: [0], requiredLVL: 3 },
				1: { buffNames: ['healthP'], buffPercentages: [0.03], requiredLVL: 3 },
				2: { buffNames: ['healthP'], buffPercentages: [0.06], requiredLVL: 3 },
				3: { buffNames: ['healthP'], buffPercentages: [0.09], requiredLVL: 3 }
			}
		],
	},
	{
		guildBuffName: 'Guild Energy',
		guildBuffs: [
			{
				0: { buffNames: ['energyIncreaseP'], buffPercentages: [0], requiredLVL: 4 },
				1: { buffNames: ['energyIncreaseP'], buffPercentages: [0.05], requiredLVL: 4 },
				2: { buffNames: ['energyIncreaseP'], buffPercentages: [0.1], requiredLVL: 4 },
				3: { buffNames: ['energyIncreaseP'], buffPercentages: [0.15], requiredLVL: 4 }
			}
		],
	},
	{
		guildBuffName: 'Guild Energy Regeneration',
		guildBuffs: [
			{
				0: { buffNames: ['energyRegenerationP'], buffPercentages: [0], requiredLVL: 6 },
				1: { buffNames: ['energyRegenerationP'], buffPercentages: [0.1], requiredLVL: 6 },
				2: { buffNames: ['energyRegenerationP'], buffPercentages: [0.2], requiredLVL: 6 },
				3: { buffNames: ['energyRegenerationP'], buffPercentages: [0.3], requiredLVL: 6 }
			}
		],
	},
	{
		guildBuffName: "Guild's Power",
		guildBuffs: [
			{
				0: { buffNames: ['physicDamageP', 'magicDamageP'], buffPercentages: [0, 0], requiredLVL: 7 },
				1: { buffNames: ['physicDamageP', 'magicDamageP'], buffPercentages: [0.03, 0.03], requiredLVL: 7 },
				2: { buffNames: ['physicDamageP', 'magicDamageP'], buffPercentages: [0.05, 0.05], requiredLVL: 7 },
				3: { buffNames: ['physicDamageP', 'magicDamageP'], buffPercentages: [0.1, 0.1], requiredLVL: 7 }
			}
		],
	},
	{
		guildBuffName: "Guild's Might",
		guildBuffs: [
			{
				0: { buffNames: ['criticalChance', 'penetration'], buffPercentages: [0, 0], requiredLVL: 8 },
				1: { buffNames: ['criticalChance', 'penetration'], buffPercentages: [2, 2], requiredLVL: 8 },
				2: { buffNames: ['criticalChance', 'penetration'], buffPercentages: [4, 4], requiredLVL: 8 },
				3: { buffNames: ['criticalChance', 'penetration'], buffPercentages: [6, 6], requiredLVL: 8 }
			}
		],
	},
	{
		guildBuffName: "Guild Superiority",
		guildBuffs: [
			{
				0: { buffNames: ['attackSpeed', 'cooldown'], buffPercentages: [0, 0], requiredLVL: 10 },
				1: { buffNames: ['attackSpeed', 'cooldown'], buffPercentages: [5, 5], requiredLVL: 10 },
				2: { buffNames: ['attackSpeed', 'cooldown'], buffPercentages: [10, 10], requiredLVL: 10 },
				3: { buffNames: ['attackSpeed', 'cooldown'], buffPercentages: [15, 15], requiredLVL: 10 }
			}
		],
	},
	{
		guildBuffName: "Guild Accuracy",
		guildBuffs: [
			{
				0: { buffNames: ['accuracy'], buffPercentages: [0], requiredLVL: 11 },
				1: { buffNames: ['accuracy'], buffPercentages: [3], requiredLVL: 11 },
				2: { buffNames: ['accuracy'], buffPercentages: [5], requiredLVL: 11 },
				3: { buffNames: ['accuracy'], buffPercentages: [7], requiredLVL: 11 }
			}
		],
	},
	{
		guildBuffName: "Guild Indestructibility",
		guildBuffs: [
			{
				0: { buffNames: ['resistance'], buffPercentages: [0], requiredLVL: 12 },
				1: { buffNames: ['resistance'], buffPercentages: [2], requiredLVL: 12 },
				2: { buffNames: ['resistance'], buffPercentages: [4], requiredLVL: 12 },
				3: { buffNames: ['resistance'], buffPercentages: [6], requiredLVL: 12 }
			}
		],
	},
]

export default guildBuff
