import { MemberInformation } from '@/store/guild/guild.type'
import { GameClasses } from '../../../types/class.type'

export type FetchGameClasses = {
	gameClasses: GameClasses[]
}

export type AddMemberFormProps = {
	memberData?: MemberInformation
}