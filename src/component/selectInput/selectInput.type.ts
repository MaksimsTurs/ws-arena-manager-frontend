import { Dispatch, SetStateAction } from 'react'

export type SelectInputProps<T> = {
	setOption: Dispatch<SetStateAction<T>>
	options: T[]
	selectedOption: T
	inputID: string
	height?: string
}
