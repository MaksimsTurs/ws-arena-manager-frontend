import style from './addPlayer.module.scss'

import TextInput from '@/component/textInput/textInput.component'
import CheckBoxInput from '@/component/checkBoxInput/checkBoxInput.component'
import SelectInput from '@/component/selectInput/selectInput.componen'
import PlayerEquipEditor from '../../component/playerEquipEditor.component'

import { SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClassRole, GameClasses } from '../../data/data.type'

import { GuildInitialState, PlayerEquip } from '@/store/guild/guild.type'
import { AppDispatch, RootState } from '@/store/store'

import classOption from '../../data/class.data'
import gameClasses from '../../data/class.data'
import data from '../../data/data.json'

import { addPlayerToList } from '@/store/guild/guild.slice'

const AddPlayer = () => {
	const [selectedClass, setSelectedClass] = useState<GameClasses>(gameClasses[0])
	const [selectedRole, setSelectedRole] = useState<ClassRole>(gameClasses[0].roles[0])
	const [playerEquip, setPlayerEquip] = useState<PlayerEquip | undefined>({})
	const [timeIsOut, setTimeIsOut] = useState<boolean>(false)

	const dispatch = useDispatch<AppDispatch>()

	console.log(data)

	const { guildMembers, memberAdded } = useSelector<
		RootState,
		GuildInitialState
	>((state) => state.guildSlice)

	const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault()

		const form = event.currentTarget
		let data = {}

		for (let i = 0; i < form.elements.length; i++) {
			const formElements = form.elements[i] as HTMLInputElement
			switch (formElements.type) {
				case 'submit':
					break
				case 'text':
					data = {
						...data,
						[formElements.name.toLowerCase()]: formElements.value,
					}
					break
				case 'checkbox':
					data = {
						...data,
						[formElements.name.toLowerCase()]: formElements.checked,
					}
					break
				case 'number':
					data = {
						...data,
						[formElements.name.toLowerCase()]: Number(formElements.value),
					}
			}
		}

		data = {
			...data,
			class: selectedClass,
			role: selectedRole,
			equip: playerEquip,
		}

		//@ts-ignore
		dispatch(addPlayerToList(data))
	}

	useEffect(() => {
		if (memberAdded) setTimeout(() => setTimeIsOut(true), 3000)
	}, [memberAdded])

	useEffect(() => {
		setSelectedRole(selectedClass.roles[0])
	}, [selectedClass])

	const options = [...selectedClass.roles,]

	return (
		<form onSubmit={handleSubmit} className={style.add_player_form}>
			<div
				className={`${style.add_player_flex_column_spacebetween} ${style.add_player_character_data}`}
			>
				<header className={style.add_player_header}>
					<p> Character Data</p>
				</header>
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
				<div className={style.add_personal_data}>
					<SelectInput
						height='13rem'
						inputID='Class'
						selectedOption={selectedClass}
						setSelection={setSelectedClass}
						options={classOption}
					/>
					<SelectInput
						inputID='Role'
						//@ts-ignore
						selectedOption={selectedRole}
						//@ts-ignore
						setSelection={setSelectedRole}
						//@ts-ignore
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
					{!memberAdded || timeIsOut ? (
						<button className={style.add_player_submit_button} type='submit'>
							Add new Member!
						</button>
					) : (
						<button
							className={style.add_player_submit_button_succes}
							type='submit'
						>
							{guildMembers[guildMembers.length - 1].name} added in you Guild!
						</button>
					)}
				</div>
			</div>
			<div className={style.add_player_character_data}>
				<header className={style.add_player_header}>
					<p>Hero Equip</p>
				</header>
				<PlayerEquipEditor
					setPlayerEquip={setPlayerEquip}
					playerEquip={playerEquip}
				/>
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
