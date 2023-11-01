import style from './addPlayer.module.scss'

import TextInput from '@/component/textInput/textInput.component'
import SelectInput from '@/component/selectInput/selectInput.componen'
import PlayerEquipEditor from './component/playerEquipEditor.component'
import PersonalData from './component/personalData.component'

import { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClassRole, GameClasses } from './data/data.type'

import { GuildInitialState } from '@/store/guild/guild.type'
import { AppDispatch, RootState } from '@/store/store'

import classOption from './data/class.data'
import gameClasses from './data/class.data'

import handleSubmit from './handler/handleSubmit/handleSubmit.handler'
import { PlayerInitialState } from '@/store/playerEquip/playerEquip.type'

const PlayerEquipEditorMemoized = memo(PlayerEquipEditor)
const PersonalDataMemoized = memo(PersonalData)

const AddPlayer = () => {
	const [selectedClass, setSelectedClass] = useState<GameClasses>(gameClasses[0])
	const [selectedRole, setSelectedRole] = useState<ClassRole>(gameClasses[0].roles[0])
	const [timeIsOut, setTimeIsOut] = useState<boolean>(true)

	const dispatch = useDispatch<AppDispatch>()

	const { playerEquip } = useSelector<RootState, PlayerInitialState>(
		(state) => state.playerEquipSlice
	)
	const { guildMembers } = useSelector<RootState, GuildInitialState>(
		(state) => state.guildSlice
	)

	useEffect(() => {
		if (guildMembers.length > 0) setTimeIsOut(false)
		setTimeout(() => setTimeIsOut(true), 3000)
	}, [guildMembers])

	useEffect(() => {
		setSelectedRole(selectedClass.roles[0])
	}, [selectedClass])

	const options: ClassRole[] = [...selectedClass.roles]

	return (
		<form
			className={style.add_player_form}
			onSubmit={(event) =>
				handleSubmit({
					dispatch,
					event,
					userData: [
						['class', selectedClass],
						['role', selectedRole],
						['equip', playerEquip],
					],
				})
			}
		>
			<div className={style.add_player_inputs_container}>
				<header className={style.add_player_header}>
					<p> Character Data</p>
				</header>
				<PersonalDataMemoized />
				<div className={style.add_personal_data}>
					<SelectInput<GameClasses>
						height='13rem'
						inputID='Class'
						selectedOption={selectedClass}
						setOption={setSelectedClass}
						options={classOption}
					/>
					<SelectInput<ClassRole>
						inputID='Role'
						selectedOption={selectedRole}
						setOption={setSelectedRole}
						options={options}
					/>
					<TextInput
						type='number'
						inputID='Level'
						placeholder='Level'
						max={34}
					/>
				</div>
				<div className={style.add_player_submit_container}>
					{timeIsOut ? (
						<button className={style.add_player_submit_button} type='submit'>
							Add new Member!
						</button>
					) : (
						<button
							disabled
							className={style.add_player_submit_button_succes}
							type='submit'
						>
							{guildMembers[guildMembers.length - 1].name} added in you Guild!
						</button>
					)}
				</div>
			</div>
			<div className={style.add_player_inputs_container}>
				<header className={style.add_player_header}>
					<p>Hero Equip</p>
				</header>
				<PlayerEquipEditorMemoized playerEquip={playerEquip} />
			</div>
		</form>
	)
}

// 'Barbarian',
// 'Rogue',
// 'Shaman',
// 'Hunter',
// 'Chieftain',
// 'Necromancer',
// 'Warlock',
// 'Death Knight',
// 'Charmer',
// 'Reaper',

export default AddPlayer
