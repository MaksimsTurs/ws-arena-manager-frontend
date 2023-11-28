import style from './memberList.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useRef } from 'react'

import { AppDispatch, RootState } from '@/store/store'
import { GuildInitialState } from '@/store/guild/guild.type'
import { WindowContextState } from '@/store/windowContext/windowContext.type'

import MemberDataContainer from './component/memberDataContainer.component'
import AddMemberForm from '../addMember/addMemberForm.component'
import NotificationBox from '@/component/notificationBox/notificationBox.component'

import {
	findGuildMember,
	selectMember,
	selectMemberToCompare,
} from '@/store/guild/guild.slice'
import {
	changeEditMode,
	changeCompareMode,
} from '@/store/windowContext/windowContext.slice'

const MemberList = () => {
	const dispatch = useDispatch<AppDispatch>()
	const searchInputRef = useRef<HTMLInputElement>(null)

	const { guild, isKicked, memberToEdit, memberToCompare } = useSelector<
		RootState,
		GuildInitialState
	>(state => state.guildSlice)
	const { isEditMode, isCompareMode } = useSelector<
		RootState,
		WindowContextState
	>(state => state.windowContextSlice)

	const findMember = () =>
		dispatch(findGuildMember(searchInputRef.current?.value!))
	const showEditMode = () => dispatch(changeEditMode(true))

	return (
		<Fragment>
			<NotificationBox
				isVisible={isKicked}
				texts={'Successfuly kicked!'}
				type='succes'
			/>
			{isEditMode ? (
				<AddMemberForm memberData={memberToEdit} />
			) : (
				<Fragment>
					<div
						className={style.member_list_container}
						style={
							memberToEdit && !isCompareMode
								? {
										width: memberToCompare ? '55rem' : '40rem',
										height: '19.8rem',
										overflow: 'hidden',
								  }
								: undefined
						}>
						<div className={style.member_input_container}>
							<input
								ref={searchInputRef}
								className={style.member_search_input}
								placeholder='Search...'
								type='text'
								onInput={findMember}
								maxLength={15}
							/>
							<p>{guild!.guildMembers.length}/{guild!.maxMembers}</p>
						</div>
						{guild?.guildMembers.length === 0 || !guild ? (
							<div className={style.member_list_emtpy}>
								<p>You Guild is empty!</p>
								<button
									onClick={showEditMode}
									className={style.member_list_add_buttom}>
									Add new Member?
								</button>
							</div>
						) : (
							guild.guildMembers.map(memberData => (
								<div
									className={style.player_member_data_body}
									onClick={() => {
										if (isCompareMode) {
											dispatch(selectMemberToCompare(memberData))
											dispatch(changeCompareMode(false))
										} else {
											dispatch(selectMember(memberData))
										}
									}}
									key={memberData.id}>
									<img
										className={style.player_member_class}
										src={memberData.class.classIcon}
										alt={memberData.name}
									/>
									<div>
										<p className={style.player_member_name}>
											{memberData.name}
										</p>
										<div className={style.player_member_data}>
											<div className={style.player_member_data_content}>
												<p className={style.player_property_name}>LVL:</p>
												<p>{memberData.level}</p>
											</div>
											<div className={style.player_member_data_content}>
												<p className={style.player_property_name}>
													Class Role:
												</p>
												<p>{memberData.role.className}</p>
											</div>
											<div className={style.player_member_data_content}>
												<p className={style.player_property_name}>
													Guild Role:
												</p>
												<p>{memberData.guildRole?.className}</p>
											</div>
										</div>
									</div>
								</div>
							))
						)}
					</div>
					{memberToEdit && !isCompareMode ? (
						<MemberDataContainer
							memberData={memberToEdit}
							memberToCompare={memberToCompare}
						/>
					) : null}
				</Fragment>
			)}
		</Fragment>
	)
}

export default MemberList
