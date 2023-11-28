import { MemberInformation } from '../guild.type'

const isDataChanged = (
	currentMemberData: MemberInformation,
	newMemberData: MemberInformation
): boolean => {
	const currentMemberEntries = Object.entries(currentMemberData['equip'])
	const newMemberEntries = Object.entries(newMemberData['equip'])

	if (currentMemberData.name !== newMemberData.name) {
		return true
	} else if (currentMemberData.level !== newMemberData.level) {
		return true
	} else if (currentMemberData.discord !== newMemberData.discord) {
		return true
	} else if (currentMemberData.telegram !== newMemberData.telegram) {
		return true
	} else if (currentMemberData.role.className !== newMemberData.role.className) {
		return true
	} else if (currentMemberEntries.length !== newMemberEntries.length) {
		return true
	} else {
		return false
	}
}

export default isDataChanged
