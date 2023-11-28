import style from '../scss/memberDataContainer.module.scss'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'

import { MemberDataContainerProps } from '../memberList.type'

import { kickMember } from '@/store/guild/guild.slice'
import { resetIsKicked } from '@/store/guild/guild.slice'

import {
	changeEditMode,
	changeCompareMode,
} from '@/store/windowContext/windowContext.slice'
import { selectMember, selectMemberToCompare } from '@/store/guild/guild.slice'

import { Fragment } from 'react'
import MemberData from './memberData.component'

const MemberDataContainer = ({
	memberData,
	memberToCompare,
}: MemberDataContainerProps) => {
	const paramsMapMember = new Map<string, number>()
	const paramsMapMemberToCompare = new Map<string, number>()

	const characterParameters = Object.entries(memberData.playerParameters)
	const characterParametersToCompare = Object.entries(
		memberToCompare?.playerParameters || {}
	)

	const dispatch = useDispatch<AppDispatch>()

	const openEditForm = () => dispatch(changeEditMode(true))

	const compareMembers = () => {
		if (memberToCompare) {
			dispatch(selectMemberToCompare(undefined))
		} else {
			dispatch(changeCompareMode(true))
		}
	}

	const closeMemberWindow = () => {
		dispatch(selectMember(undefined))
		dispatch(selectMemberToCompare(undefined))
	}

	const kickThisMember = () => {
		dispatch(kickMember(memberData.id))
		setTimeout(() => dispatch(resetIsKicked()), 2000)
		closeMemberWindow()
	}

	for (let [key, value] of characterParameters)
		paramsMapMember.set(key, value as number)
	for (let [key, value] of characterParametersToCompare)
		paramsMapMemberToCompare.set(key, value as number)

	return (
		<Fragment>
			<div
				className={
					memberData
						? style.member_container
						: `${style.member_container} ${style.member_container_hidden}`
				}>
				<div
					style={
						memberToCompare
							? {
									display: 'flex',
									justifyContent: 'center',
									padding: '1rem 3.5rem 1rem 8rem',
							  }
							: { padding: '1rem 3.5rem 1rem 8rem' }
					}>
					<MemberData
						memberData={memberData}
						compareDataOne={memberToCompare ? paramsMapMember : undefined}
						compareDataTwo={
							memberToCompare ? paramsMapMemberToCompare : undefined
						}
					/>
					{memberToCompare ? (
						<MemberData
							memberData={memberToCompare}
							compareDataOne={paramsMapMemberToCompare}
							compareDataTwo={paramsMapMember}
						/>
					) : null}
				</div>
				<button
					className={style.member_close_button}
					type='button'
					onClick={closeMemberWindow}>
					&#10005;
				</button>
			</div>
			<div className={style.memeber_action_menu_container}>
				<button onClick={openEditForm} className={style.member_action_button}>
					Edit
				</button>
				{!memberToCompare && <button onClick={kickThisMember} className={style.member_action_button}>
					Kick
				</button>}
				<button onClick={compareMembers} className={style.member_action_button}>
					{memberToCompare ? 'Close' : 'Compare'}
				</button>
			</div>
		</Fragment>
	)
}
export default MemberDataContainer
