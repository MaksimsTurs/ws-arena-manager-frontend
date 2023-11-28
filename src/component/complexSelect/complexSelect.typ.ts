import { Dispatch, SetStateAction } from "react"
import { EquipPosition } from "@/types/gameParameters.type"
import { MemberEquip } from "@/store/memberEquip/memberEquip.type"

export type ComplexSelectProps = {
  backgroundIMG: string
  className?: string
  renederElement?: { element: any }
  compare?: { numbOne?: number, numbTwo?: number }
  onClick?: () => any
  setEquipWindowVisible?: Dispatch<SetStateAction<boolean>>
  equipPosition?: EquipPosition
  memberEquip?: MemberEquip
}