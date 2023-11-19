const handlePercentageParams = (numb: number): string | number => {
	if (Number.isInteger(numb)) {
		return numb
	} else if (numb < 0.9) {
		return `${(numb * 100).toFixed(1)}%`
	} else {
		return `${numb.toFixed(1)}%`
	}
}

export default handlePercentageParams
