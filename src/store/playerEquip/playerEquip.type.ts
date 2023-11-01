import { PlayerEquip } from "../guild/guild.type"
import { GameParameters } from "@/managerWindow/tab/addPlayer/data/type/gameParameters.type"

export type PlayerInitialState = {
  playerEquip: PlayerEquip
}

export type ChoseEquip = {
  equipType: string
  equip: GameParameters
}