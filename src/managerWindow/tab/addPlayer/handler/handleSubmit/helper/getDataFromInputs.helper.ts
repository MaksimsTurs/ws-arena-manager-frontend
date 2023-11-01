const getDataFromInputs = (form: HTMLFormElement) => {
	let data = {}

	for (let i = 0; i < form.elements.length; i++) {
		const formElements = form.elements[i] as HTMLInputElement
		switch (formElements.type) {
			case 'submit':
				break
			case 'text':
				data = {
					...data,
					[formElements.name.toLowerCase()]: formElements.value,
				}
				break
			case 'checkbox':
				data = {
					...data,
					[formElements.name.toLowerCase()]: formElements.checked,
				}
				break
			case 'number':
				data = {
					...data,
					[formElements.name.toLowerCase()]: Number(formElements.value),
				}
		}
	}

	return data
}

export default getDataFromInputs
