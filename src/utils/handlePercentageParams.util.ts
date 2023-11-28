const handlePercentageParams = (paramName: string, numb: number): string | number => {
	const percentParams: string[] = [
		'Resilience',
		'Resistance',
		'Vampirism',
		'Parry',
		'Block',
		'Critical Chance',
		'Doge',
		'Attack Speed',
		'Accuracy',
		'Penetration',
		'Ferocity',
		'Cooldown',
		'Rage',

		'magicDamageP',
		'physicDamageP',
		'healthP',
		'physicDefenceP',
		'magicDefenceP',
		'energyRegenerationP',
		'energyIncreaseP'
	]

	if (typeof numb !== 'number') throw Error(`num (${numb}) is not a Number!`)
	if (percentParams.includes(paramName) && numb < 0.9) {
		return `${(numb * 100).toFixed(1)}%`
	} else if(percentParams.includes(paramName)) {
		return `${numb.toFixed(1)}%`
	} else {
		return numb 
	}
}

export default handlePercentageParams
