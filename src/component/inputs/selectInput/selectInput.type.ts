import { Dispatch, SetStateAction } from 'react'

export type SelectInputProps<T> = {
	options?: T[]
	selectedOption?: T
	setOption: Dispatch<SetStateAction<T | undefined>>
	placeholder: string
}