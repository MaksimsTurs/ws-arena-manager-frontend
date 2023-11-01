import style from './managerWindow.module.scss'

import AddPlayer from './tab/addPlayer/addPlayer.component'
import PlayerList from './component/playerList.component'

import { MouseEvent, useState } from 'react'

const ManagerWindow = () => {
	const [currentTab, setCurrentTab] = useState<string>('Add new Player')

	const actions: string[] = ['Add new Player', 'Player List', 'Guild Statistic']

	const changeTab = (event: MouseEvent<HTMLButtonElement>) =>	setCurrentTab(event.currentTarget.textContent!)

	return (
		<div className={style.window_container}>
			<div className={style.window_body}>
				<header className={style.window_body_header}>
					{actions.map((string) => (
						<button
							key={string}
							className={
								string === currentTab
									? `${style.window_body_tab} ${style.window_body_tab_selected}`
									: style.window_body_tab
							}
							onClick={changeTab}
						>
							{string}
						</button>
					))}
				</header>
				{currentTab === 'Add new Player' ? (
					<AddPlayer />
				) : currentTab === 'Player List' ? (
					<PlayerList />
				) : null}
			</div>
		</div>
	)
}

export default ManagerWindow
