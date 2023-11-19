import { PlayerInformation } from '@/store/guild/guild.type'
import { Dispatch, SetStateAction } from 'react'

export type MemberDataProps = {
	memberData: PlayerInformation
	setSelectedName: Dispatch<SetStateAction<PlayerInformation | undefined>>
}
