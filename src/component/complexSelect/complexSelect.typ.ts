import { Dispatch, SetStateAction } from "react"
import { EquipPosition } from "@/types/gameParameters.type"
import { PlayerEquip } from "@/store/guild/guild.type"

export type ComplexSelectProps = {
  backgroundIMG: string
  className?: string
  renederElement?: { element: any }
  onClick?: () => any
  setEquipWindowVisible?: Dispatch<SetStateAction<boolean>>
  equipPosition?: EquipPosition
  memberEquip?: PlayerEquip
}