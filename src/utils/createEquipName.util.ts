const createEquipName = (str: string): string => {
	let equipTitle: string = ''
	const titleLength: number = str.split(/[A-Z]/)[0].length
	const charAt: string = str.charAt(titleLength)

	if (charAt.length > 0) {
		equipTitle = `${str.split(/[A-Z]/)[0]} ${charAt}${str.split(/[A-Z]/)[1]}`
	} else {
		equipTitle = str
	}

	return equipTitle
}

export default createEquipName
