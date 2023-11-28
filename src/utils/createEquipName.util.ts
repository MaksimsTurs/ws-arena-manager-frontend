import firstLetterToUpperCase from "./firstLetterToUpperCase.util"

const createEquipName = (str: string): string => {
	if(str.search('P') >= 0) return str

	let equipTitle: string = ''
	const titleLength: number = str.split(/[A-Z]/)[0].length
	const charAt: string = str.charAt(titleLength)

	if (charAt.length > 0) {
		equipTitle = `${firstLetterToUpperCase(str.split(/[A-Z]/)[0])} ${charAt}${str.split(/[A-Z]/)[1]}`
	} else {
		equipTitle = firstLetterToUpperCase(str)
	}

	return equipTitle
}

export default createEquipName