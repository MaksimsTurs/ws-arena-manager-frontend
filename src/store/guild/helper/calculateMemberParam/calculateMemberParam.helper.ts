import { GameParameters } from '@/types/gameParameters.type'
import { CalculateMemberParam } from './calculateMemberParam.type'

const calculateMemberParameters = ({
	memberEquip,
	guildBuffs,
}: CalculateMemberParam): Partial<GameParameters> => {
	let memberParams: Map<string, number> = new Map<string, number>()

	memberParams.set('physicDefence', 0)
	memberParams.set('magicDefence', 0)
	memberParams.set('physicDefenceP', 0)
	memberParams.set('magicDefenceP', 0)
	memberParams.set('magicDamage', 0)
	memberParams.set('magicDamageP', 0)
	memberParams.set('physicDamage', 0)
	memberParams.set('physicDamageP', 0)
	memberParams.set('health', 0)
	memberParams.set('healthP', 0)

	const excludeWords: string[] = [
		'_id',
		'lvl',
		'name',
		'icon',
		'type',
		'position',
	]
		
	const memberEquipEntries = Object.entries(memberEquip)

	//Calculate all params from member equip
	for (let [_key, equipValue] of memberEquipEntries) {
		const eqipEntries = Object.entries(equipValue)

		for (let [paramKey, paramValue] of eqipEntries) {
			if (paramKey === 'crystal' || paramKey === 'rune') {
				//@ts-ignore
				const equipBuffValue = Object.entries(paramValue)[0]

				if (memberParams.get(equipBuffValue[0])) {
					const newValue: number =
						memberParams.get(equipBuffValue[0])! + (equipBuffValue[1] as number)
					memberParams.set(equipBuffValue[0], newValue)
				} else {
					memberParams.set(equipBuffValue[0], equipBuffValue[1] as number)
				}
			} else {
				if (memberParams.get(paramKey)) {
					const newValue: number =
						memberParams.get(paramKey)! + (paramValue as number)
					memberParams.set(paramKey, newValue)
				} else if (!excludeWords.includes(paramKey)) {
					memberParams.set(paramKey, paramValue as number)
				}
			}
		}
	}

	//Calculate all params form guild buffs
	if (guildBuffs) {
		const guildBuffsEntries = Object.entries(guildBuffs)

		for (let [guildKey, guildValue] of guildBuffsEntries) {
			if (memberParams.get(guildKey)) {
				const newValue: number =
					memberParams.get(guildKey)! + (guildValue as number)
				memberParams.set(guildKey, newValue)
			} else {
				memberParams.set(guildKey, guildValue)
			}
		}
	}

	const physDef: number =	memberParams.get('physicDefenceP')! * memberParams.get('physicDefence')!
	const magDef: number = memberParams.get('magicDefenceP')! * memberParams.get('magicDefence')!
	const physDmg: number =	memberParams.get('physicDamageP')! * memberParams.get('physicDamage')!
	const magDmg: number = memberParams.get('magicDamageP')! * memberParams.get('magicDamage')!
	const energyReg: number =	memberParams.get('energyRegenerationP')! * memberParams.get('energyRegeneration')!
	const energyIncr: number = memberParams.get('energyIncreaseP')! * memberParams.get('energyIncrease')!
	const health: number = memberParams.get('healthP')! * memberParams.get('health')!

	const calculated: Partial<GameParameters> = {
		...Object.fromEntries(memberParams),
		physicDefence: physDef >= 0 ? Number((physDef + memberParams.get('physicDefence')!).toFixed(0)) : 0,
		magicDefence: magDef >= 0 ? Number((magDef + memberParams.get('magicDefence')!).toFixed(0)) : 0,
		physicDamage: physDmg >= 0 ? Number((physDmg + memberParams.get('physicDamage')!).toFixed(0)) : 0,
		magicDamage: magDmg >= 0	? Number((magDmg + memberParams.get('magicDamage')!).toFixed(0)) : 0,
		energyRegeneration: energyReg >= 0 ? Number((energyReg + memberParams.get('energyRegeneration')!).toFixed(0)) : 0,
		energyIncrease: energyIncr >= 0? Number((energyIncr + memberParams.get('energyIncrease')!).toFixed(0)) : 0,
		health: health >= 0 ? Number((health + memberParams.get('health')!).toFixed(0)) : 0,
	}

	delete calculated.energyIncreaseP
	delete calculated.energyRegenerationP
	delete calculated.magicDamageP
	delete calculated.magicDefenceP
	delete calculated.physicDamageP
	delete calculated.physicDefenceP
	delete calculated.healthP

	return calculated
}

export default calculateMemberParameters
