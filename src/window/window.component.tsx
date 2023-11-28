import scss from './window.module.scss'

import AddMember from './tab/addMember/addMemberForm.component'
import MemberList from './tab/memberList/memberList.component'
import MyGuild from './tab/myGuild/myGuild.component'

import { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { changeTab } from '@/store/windowContext/windowContext.slice'

import { AppDispatch, RootState } from '@/store/store'
import { WindowContextState } from '@/store/windowContext/windowContext.type'
import { WindowTabs } from '@/store/windowContext/windowContext.type'
import { GuildInitialState } from '@/store/guild/guild.type'

const AddMemberMemoized = memo(AddMember)
const MemberListMemoized = memo(MemberList)
const MyGuildMemoized = memo(MyGuild)

const Window = () => {
	const tabs: WindowTabs[] = ['My Guild!', 'Add Member!', 'Guild List!', 'Guild Statistic!',]

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const { currentTab } = useSelector<RootState, WindowContextState>(state => state.windowContextSlice)
	const { guild } = useSelector<RootState, GuildInitialState>(state => state.guildSlice)

	useEffect(() => {	navigate('/') }, [])

	return (
		<div className={scss.window_container}>
			<div className={scss.window_body}>
				<header className={scss.window_body_header}>
					{tabs.map(tabName => (
						<button
							key={tabName}
							disabled={tabName !== 'My Guild!' && !guild?.name}
							onClick={() => dispatch(changeTab(tabName))}
							className={
								tabName !== 'My Guild!' && !guild?.name
								? scss.window_body_header_disable 
								:	tabName === currentTab 
									? `${scss.window_header_tab} ${scss.window_header_tab_selected}` 
									: scss.window_header_tab
							}>
							{tabName !== 'My Guild!' && !guild?.name && <span>&#128274;</span>}{tabName}
						</button>
					))}
				</header>
				{currentTab === 'Add Member!' ? (
					<AddMemberMemoized />
				) : currentTab === 'Guild List!' ? (
					<MemberListMemoized />
				) : currentTab === 'My Guild!' ? (
					<MyGuildMemoized />
				) : null}
			</div>
		</div>
	)
}

export default Window
