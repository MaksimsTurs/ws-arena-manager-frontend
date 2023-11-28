import { SelectedEquip, MemberEquip } from "@/store/memberEquip/memberEquip.type"
import { EquipPosition, GameParameters } from "@/types/gameParameters.type"
import { Dispatch, SetStateAction } from "react"

export type FetchEqipInPosition = {
	equip: GameParameters[]
}

export type MemberEquipEditorProps = {
	//Used for icons
	memberEquip: MemberEquip
	memberLVL?: number
	classEquipType?: string[] 
}

export type EquipListContainerProps = {
	setEquipWindowVisilbe: Dispatch<SetStateAction<boolean>>
	isEquipWindowVisilbe: boolean
	memberLVL?: number
	classEquipType?: string[]
}

export type EquipDataProps = {
	//Equip to deep lock
	equipPosition: EquipPosition | string
	selectedEquip: SelectedEquip
	currentTab: string
	memberEquip: MemberEquip
	isEditMode: boolean
	closeThisWindow: () => void
}

export type EquiListProps = {
	equipData: GameParameters[]
	isLoading: boolean
}

export type EquipParametersProps = {
	selectedEquip: SelectedEquip
	setChoseMode: Dispatch<SetStateAction<string>>
	memberEquip?: MemberEquip
}

export type EquiBuffDataProps = {
	isChoseMode: string
	memberEquip?: MemberEquip
	selectedEquip: SelectedEquip
}
