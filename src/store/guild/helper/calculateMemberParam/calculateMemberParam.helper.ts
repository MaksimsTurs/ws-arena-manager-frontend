import { GameParameters } from '@/types/gameParameters.type'
import { CalculateMemberParam } from './calculateMemberParam.type'

const calculateMemberParameters = ({
	memberEquip,
}: CalculateMemberParam): Partial<GameParameters> => {
	let memberParams: Partial<GameParameters> = {}
	let calculatedMemberParameters = {
		physicDefence: 0,
		magicDefence: 0,
		physicDefenceP: 0,
		magicDefenceP: 0,
		resilience: 0,
		resistance: 0,
		health: 0,
		healtP: 0,
		vampirism: 0,
		parry: 0,
		block: 0,
		doge: 0,
		magicDamage: 0,
		magicDamageP: 0,
		physicDamage: 0,
		physicDamageP: 0,
		criticalChance: 0,
		attackSpeed: 0,
		accuracy: 0,
		penetration: 0,
		ferocity: 0,
		cooldown: 0,
		energyRegeneration: 0,
		energyRegenerationP: 0,
		energyIncrease: 0,
		rage: 0,
	}

	const equipValues = Object.values(memberEquip)

	for (
		let equipValueIndex = 0;
		equipValueIndex < equipValues.length;
		equipValueIndex++
	) {
		const equipEntries = Object.entries(equipValues[equipValueIndex])

		for (let [key, value] of equipEntries) {
			if (key === 'rune' || key === 'crystal') {
				const buffEntries = Object.entries(value)

				for (let [key, value] of buffEntries) {
					if (Object.hasOwn(calculatedMemberParameters, key)) {
						calculatedMemberParameters = {
							...calculatedMemberParameters,
							//TODO: Fix type error!
							//@ts-ignore
							[key]: calculatedMemberParameters[key] + value,
						}
					}
				}
			} else if (Object.hasOwn(calculatedMemberParameters, key)) {
				calculatedMemberParameters = {
					...calculatedMemberParameters,
					//TODO: Fix type error!
					//@ts-ignore
					[key]: calculatedMemberParameters[key] + value,
				}
			} else {
				calculatedMemberParameters = {
					...calculatedMemberParameters,
					[key]: value,
				}
			}
		}
	}

	let totalMagicDamage =
		calculatedMemberParameters.magicDamage *
		calculatedMemberParameters.magicDamageP
	let totalPhysicDamage =
		calculatedMemberParameters.physicDamage *
		calculatedMemberParameters.physicDamageP
	let totalPhysicDefence =
		calculatedMemberParameters.physicDefence *
		calculatedMemberParameters.physicDefenceP
	let totalMagicDefence =
		calculatedMemberParameters.magicDefence *
		calculatedMemberParameters.magicDefenceP
	let totalEnergyRegeneration =
		calculatedMemberParameters.energyRegeneration *
		calculatedMemberParameters.energyRegenerationP

	const calculatedEntries = Object.entries(calculatedMemberParameters)

	for (let [key, value] of calculatedEntries) {
		if (value > 0) {
			memberParams = { ...memberParams, [key]: value }
		} else {
			continue
		}
	}

	memberParams = {
		...memberParams,
		magicDamage: Number(
			(totalMagicDamage + calculatedMemberParameters.magicDamage).toFixed(0)
		),
		magicDefence: Number(
			(totalMagicDefence + calculatedMemberParameters.magicDefence).toFixed(0)
		),
		physicDamage: Number(
			(totalPhysicDamage + calculatedMemberParameters.physicDamage).toFixed(0)
		),
		physicDefence: Number(
			(totalPhysicDefence + calculatedMemberParameters.physicDefence).toFixed(0)
		),
		energyRegeneration: Number(
			(
				totalEnergyRegeneration + calculatedMemberParameters.energyRegeneration
			).toFixed(0)
		),
	}

	delete memberParams.lvl
	delete memberParams.icon
	delete memberParams.name
	delete memberParams.type
	return memberParams
}

export default calculateMemberParameters
