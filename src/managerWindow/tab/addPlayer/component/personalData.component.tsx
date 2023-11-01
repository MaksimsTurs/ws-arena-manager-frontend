import style from '../addPlayer.module.scss'

import TextInput from '@/component/textInput/textInput.component'
import CheckBoxInput from '@/component/checkBoxInput/checkBoxInput.component'

const PersonalData = () => {
	return (
		<div className={style.add_personal_data}>
			<TextInput inputID='Name' type='text' placeholder='Player name...' />
			<div>
				<p className={style.add_title}>Social Apps</p>
				<div className={style.add_player_checkbox_container}>
					<CheckBoxInput inputID='Discord' />
					<CheckBoxInput inputID='Telegram' />
				</div>
			</div>
		</div>
	)
}

export default PersonalData
