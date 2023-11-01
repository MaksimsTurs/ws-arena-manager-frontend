import { Dispatch, SetStateAction } from 'react'
import { EquipParameters, EquipTypes } from './data/data.type'
import { PlayerEquip } from '@/store/guild/guild.type'

export type PlayerEquipEditorProps = {
	setPlayerEquip: Dispatch<SetStateAction<PlayerEquip | undefined>>
	playerEquip?: PlayerEquip
}

export type EquipSelectProps = {
	setEquipType: Dispatch<SetStateAction<EquipTypes>>
	setEquipListVisible: Dispatch<SetStateAction<boolean>>
	backgroundImg: string
	equipType: EquipTypes
}

export type EquipListProps = {
	setPlayerEquip: Dispatch<SetStateAction<PlayerEquip | undefined>>
	setEquipListVisible: Dispatch<SetStateAction<boolean>>
	isVisible: boolean
	equipType: string
	equipData: EquipParameters[]
}

export type EquipDataProps = {
	equip?: EquipParameters
	isVisible: boolean
}