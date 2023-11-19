import style from './window.module.scss'

import AddMember from './tab/addPlayer/addMemberForm.component'
import MemberList from './tab/playerList/memberList.component'

import { useEffect, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { changeTab } from '@/store/windowContext/windowContext.slice'

import { AppDispatch, RootState } from '@/store/store'
import { WindowContextState } from '@/store/windowContext/windowContext.type'
import { WindowTabs } from '@/store/windowContext/windowContext.type'

const AddMemberMemoized = memo(AddMember)
const MemberListMemoized = memo(MemberList)

const Window = () => {
	const tabs: WindowTabs[] = ['Add Member!', 'Guild List!', 'Guild Statistic!']
	
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()

	const { currentTab } = useSelector<RootState, WindowContextState>(state => state.windowContextSlice)

	useEffect(() => {
		navigate('/')
	}, [])

	return (
		<div className={style.window_container}>
			<div className={style.window_body}>
				<header className={style.window_body_header}>
					{tabs.map(tabName => (
						<button
							key={tabName}
							onClick={() => dispatch(changeTab(tabName))}
							className={
								tabName === currentTab
									? `${style.window_body_tab} ${style.window_body_tab_selected}`
									: style.window_body_tab
							}>
							{tabName}
						</button>
					))}
				</header>
				{currentTab === 'Add Member!' ? (
					<AddMemberMemoized />
				) : currentTab === 'Guild List!' ? (
					<MemberListMemoized />
				) : null}
			</div>
		</div>
	)
}

export default Window
