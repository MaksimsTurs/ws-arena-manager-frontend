import { MemberInformation } from '@/store/guild/guild.type'

export type MemberDataContainerProps = {
	memberData: MemberInformation
	memberToCompare?: MemberInformation
}

export type MemberDataProps = {
	memberData: MemberInformation
	compareDataOne?: Map<string, number>
	compareDataTwo?: Map<string, number>
}