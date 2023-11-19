import style from './memberList.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { Fragment, useState, useRef, useEffect } from 'react'

import { AppDispatch, RootState } from '@/store/store'
import { GuildInitialState, PlayerInformation } from '@/store/guild/guild.type'

import MemberData from './component/memberData.component'
import AddMemberForm from '../addPlayer/addMemberForm.component'
import NotificationBox from '@/component/notificationBox/notificationBox.component'

import { setPlayerEquip } from '@/store/playerEquip/playerEquip.slice'
import { findGuildMember } from '@/store/guild/guild.slice'
import { WindowContextState } from '@/store/windowContext/windowContext.type'
import { changeEditMode } from '@/store/windowContext/windowContext.slice'

const MemberList = () => {
	const [selectedMember, setSelectedMember] = useState<PlayerInformation | undefined>()

	const dispatch = useDispatch<AppDispatch>()
	const searchInputRef = useRef<HTMLInputElement>(null)

	const { guildMembers, isKicked, isChanged } = useSelector<RootState, GuildInitialState>(state => state.guildSlice)
	const { isEditMode } = useSelector<RootState, WindowContextState>(state => state.windowContextSlice)

	const findMember = () => dispatch(findGuildMember(searchInputRef.current?.value!))
		
	const showEditMode = () => dispatch(changeEditMode(true))
	
	const closeEditMode = () => {
		dispatch(setPlayerEquip({}))
		dispatch(changeEditMode(false))
	}

	useEffect(() => {
		if(selectedMember) {
			//@ts-ignore
			setSelectedMember(prev => ({
				...prev, 
				equip: guildMembers[guildMembers.length - 1].equip, 
				playerParameters: guildMembers[guildMembers.length - 1].playerParameters
			}))
		} 
	}, [isChanged])

	return (
		<Fragment>
			<NotificationBox
				isVisible={isKicked}
				texts={'Successfuly kicked!'}
				type='succes'
			/>
			{isEditMode ? (
				<Fragment>
					<button
						className={style.player_edit_close_button}
						onClick={closeEditMode}>
						&#10006;
					</button>
					<AddMemberForm memberData={selectedMember} />
				</Fragment>
			) : (
				<Fragment>
					<div
						className={style.member_list_container}
						style={selectedMember ? { width: '40rem', height: '30rem', overflow: 'hidden' } : undefined}>
						<div className={style.member_input_container}>
							<input 
								ref={searchInputRef}
								className={style.member_search_input}
								placeholder='Search...'
								type="text"
								onInput={findMember}
							/>
						</div>
						{guildMembers.length === 0 ? (
							<div className={style.member_list_emtpy}>
								<p>You Guild is empty!</p>
								<button
									onClick={showEditMode}
									className={style.member_list_add_buttom}>
									Add new Member?
								</button>
							</div>
						) : (
							guildMembers.map(memberData => (
								<div
									className={style.player_member_data_body}
									onClick={() => setSelectedMember(memberData)}
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
												<p className={style.player_property_name}>Role:</p>
												<p>{memberData.role.className}</p>
											</div>
										</div>
									</div>
								</div>
							))
						)}
					</div>
					{selectedMember ? (
						<MemberData
							memberData={selectedMember}
							setSelectedName={setSelectedMember}
						/>
					) : null}
				</Fragment>
			)}
		</Fragment>
	)
}

export default MemberList
