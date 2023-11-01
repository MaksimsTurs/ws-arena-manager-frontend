import { GameClasses } from '@/managerWindow/data/data.type'
import { Dispatch, SetStateAction } from 'react'

export type SelectInputProps = {
	inputID: string
	height?: string
	isClassSelect?: boolean
	options: GameClasses[]
	setSelection: Dispatch<SetStateAction<GameClasses>>
	selectedOption: GameClasses
}
