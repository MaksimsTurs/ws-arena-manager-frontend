import { addPlayerToList } from '@/store/guild/guild.slice'
import { HandleSubmitParams } from './handleSubmit.type'
import getDataFromInputs from './helper/getDataFromInputs.helper'

const handleSubmit = ({ event, dispatch, userData }: HandleSubmitParams) => {
	event.preventDefault()

	let data = {}
	const form = event.currentTarget

	data = { ...getDataFromInputs(form) }

	if(userData) {
		for(let index = 0; index < userData.length; index++) {
			data = {...data, [userData[index][0]]: userData[index][1] }
		}
	}

	// @ts-ignore
	dispatch(addPlayerToList(data))
}

export default handleSubmit
