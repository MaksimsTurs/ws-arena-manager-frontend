import { Dispatch, SetStateAction } from 'react'
import { GameParameters, EquipTypes } from './data/type/gameParameters.type'
import { PlayerEquip } from '@/store/guild/guild.type'

export type PlayerEquipEditorProps = {
	//Used for icons
	playerEquip: PlayerEquip
}

export type EquipSelectProps = {
	//Used to open list with Equip
	setEquipListVisible: Dispatch<SetStateAction<boolean>>
	backgroundImg: string
	//Sort parameter
	equipType: EquipTypes
}

export type EquipListContainerProps = {
	setEquipListVisible: Dispatch<SetStateAction<boolean>>
	isEquipListVisible: boolean
	equipData: GameParameters[]
}

export type EquipDataProps = {
	//Equip to deep lock
	setSelectedEquip: Dispatch<SetStateAction<GameParameters | undefined>>
	selectedEquip: GameParameters
	equipType: string
	closeThisList: () => void 
}

export type EquiListProps = {
	//Equip to deep lock
	setSelectedEquip: Dispatch<SetStateAction<GameParameters | undefined>>
	isEquipListVisible: boolean
	equipData: GameParameters[]
	equipType: string
	closeThisList: () => void 
}