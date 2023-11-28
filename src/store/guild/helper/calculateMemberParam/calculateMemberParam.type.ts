import { MemberEquip } from "@/store/memberEquip/memberEquip.type"

export type CalculateMemberParam = {
  memberEquip: MemberEquip
  guildBuffs?: { [key: string]: number }
}