import style from './addMemberForm.module.scss'

import MemberEquipEditor from '../../../component/memberEquipEditor/memberEquipEditor.component'
import CheckBoxInput from '@/component/inputs/checkBoxInput/checkBoxInput.component'
import TextInput from '@/component/inputs/textInput/textInput.component'
import SelectInput from '@/component/inputs/selectInput/selectInput.componen'
import NotificationBox from '@/component/notificationBox/notificationBox.component'
import Loader from '@/component/loader/loader.component'

import { Fragment, memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'

import { GameClasses, ClassRoles } from '../../../types/class.type'
import { AppDispatch, RootState } from '@/store/store'
import { GuildInitialState, GuildRoles, PlayerInformation } from '@/store/guild/guild.type'
import { EquipInitialState } from '@/store/playerEquip/playerEquip.type'
import { AddMemberFormProps, FetchGameClasses } from './addMemberForm.type'

import { addPlayerToList, changeMemberData, resetIsChanged, resetIsAdded } from '@/store/guild/guild.slice'
import { setPlayerEquip } from '@/store/playerEquip/playerEquip.slice'

import generateId from '@/utils/generateId.util'

import useFetch from '@/hook/useFetch/useFetch.hook'
import CheckboxContainer from '@/component/checkBoxContainer/checkboxContainer.component'
import guildRoles from '@/store/guild/guildRoles'

const MemberEquipEditorMemoized = memo(MemberEquipEditor)

//memberData used for Edit mode!
const AddMemberForm = ({ memberData }: AddMemberFormProps) => {
	const { data, isLoading } = useFetch<FetchGameClasses>(
		'/get-all-classes',
		undefined,
		memberData ? false : true
	)

	//Fetched classes
	const [classOptions, setClassOption] = useState<GameClasses[]>(data?.gameClasses || [])

	//New member class information
	const [selectedClass, setClass] = useState<GameClasses | undefined>(memberData?.class)
	const [selectedClassRole, setClassRole] = useState<ClassRoles | undefined>(memberData?.role)
	const [selectedGuildRole, setGuildRole] = useState<GuildRoles | undefined>(memberData?.guildRole)

	const dispatch = useDispatch<AppDispatch>()

	const { playerEquip } = useSelector<RootState, EquipInitialState>(state => state.playerEquipSlice)
	const { guildMembers, isAdded, isChanged } = useSelector<RootState, GuildInitialState>(state => state.guildSlice)

	const {
		register,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = useForm<PlayerInformation>({ defaultValues: { level: 34 } })

	const submitForm: SubmitHandler<PlayerInformation> = newMemberData => {
		const newMember: PlayerInformation = {
			...newMemberData,
			id: memberData ? memberData.id : generateId(),
			role: selectedClassRole!,
			guildRole: selectedGuildRole!,
			class: selectedClass!,
			equip: playerEquip,
		}

		if (memberData) {
			dispatch(changeMemberData(newMember))
			setTimeout(() => dispatch(resetIsChanged()), 2000)
		} else {
			dispatch(addPlayerToList(newMember))
			setTimeout(() => dispatch(resetIsAdded()), 2000)
		}
	}

	const validateName = (_str: string) => {
		let isOwned = false
		const memberName = getValues('name')

		guildMembers.forEach(member =>
			member.name === memberName ? (isOwned = true) : (isOwned = false)
		)

		if (memberName.length === 0 || isOwned)
			return 'Name is to short or is owned!'
	}

	useEffect(() => {
		if (data) setClassOption(data.gameClasses)
		if (memberData) dispatch(setPlayerEquip(memberData.equip))
	}, [isLoading, memberData])

	useEffect(() => {
		setClassRole(selectedClass?.classPlayebelRoles[0])
	}, [selectedClass])

	return (
		<Fragment>
			<NotificationBox
				isVisible={errors['name'] ? true : false}
				texts={errors['name']?.message}
				type='error'
			/>
			<NotificationBox
				isVisible={isAdded}
				texts={'Successfuly added!'}
				type='succes'
			/>
			<NotificationBox
				isVisible={isChanged}
				texts={'Successfuly changed!'}
				type='succes'
			/>
			<form
				className={style.add_member_form}
				onSubmit={handleSubmit(submitForm)}>
				{isLoading ? (
					<Loader />
				) : (
					<Fragment>
						<div className={style.add_member_inputs_container}>
							<div className={style.add_member_inputs_body}>
								<header className={style.add_member_header}>
									<h3> Member Information</h3>
								</header>
								<div style={{ margin: '0.5rem 0rem' }}>
									<TextInput<PlayerInformation>
										inputLabel='Member Name:'
										inputName='name'
										placeholder='Name must be unique and bigger then 0 letters!'
										type='text'
										register={register}
										validation={memberData ? undefined : validateName}
										defaultValue={memberData?.name}
									/>
								</div>
								<div style={{ margin: '0.5rem 0rem' }}>
									<CheckboxContainer labelText='Social Media:'>
										<CheckBoxInput
											inputName='discord'
											inputLabel='Discord'
											register={register}
											defaultValue={memberData?.discord}
										/>
										<CheckBoxInput
											inputName='telegram'
											inputLabel='Telegram'
											register={register}
											defaultValue={memberData?.telegram}
										/>
									</CheckboxContainer>
								</div>
								<div style={{ margin: '0.5rem 0rem' }}>
									<CheckboxContainer labelText='Guild Role:'>
										<SelectInput<GuildRoles>
											placeholder='Select Guild Role!'
											options={guildRoles}
											selectedOption={selectedGuildRole}
											setOption={setGuildRole}
										/>
									</CheckboxContainer>
								</div>
							</div>
							<div className={style.add_member_inputs_body}>
								<header className={style.add_member_header}>
									<h3>Class Information</h3>
								</header>
								<div style={{ margin: '0.5rem 0rem' }}>
									<CheckboxContainer labelText='Member Class:'>
										<SelectInput<GameClasses>
											placeholder='Select class!'
											options={classOptions}
											selectedOption={selectedClass}
											setOption={setClass}
										/>
									</CheckboxContainer>
								</div>
								<div style={{ margin: '0.5rem 0rem' }}>
									<CheckboxContainer labelText='Class Role:'>
										<SelectInput<ClassRoles>
											placeholder='Select class role!'
											options={selectedClass?.classPlayebelRoles}
											selectedOption={selectedClassRole}
											setOption={setClassRole}
										/>
									</CheckboxContainer>
								</div>
								<div style={{ margin: '0.5rem 0rem' }}>
									<TextInput<PlayerInformation>
										type='number'
										inputName='level'
										inputLabel='LvL:'
										placeholder='Level'
										max={34}
										defaultValue={memberData?.level || 0}
										register={register}
									/>
								</div>
							</div>
						</div>
						<div className={style.add_member_inputs_container}>
							<div className={style.add_member_inputs_body}>
								<header className={style.add_member_header}>
									<h3>Hero Equip</h3>
								</header>
								<MemberEquipEditorMemoized
									classEquipType={selectedClass?.enableEquipType}
									memberLVL={watch('level')}
									memberEquip={playerEquip}
								/>
							</div>
							<div className={style.add_member_submit_container}>
						  	<button 
								  className={
									  (isAdded || isChanged || isLoading) 
									  ? `${style.add_member_submitet_button} ${style.add_member_submit_button}`
									  : style.add_member_submit_button
								 } 
								 type='submit'>
								   {(isAdded || isChanged || isLoading) ? 'Submitet' : 'Submit'}
								</button>
							</div>
						</div>
					</Fragment>
				)}
			</form>
		</Fragment>
	)
}

export default AddMemberForm
