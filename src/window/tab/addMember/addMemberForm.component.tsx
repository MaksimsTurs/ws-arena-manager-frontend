import scss from './addMemberForm.module.scss'

import MemberEquipEditor from '../../../component/memberEquipEditor/memberEquipEditor.component'
import CheckBoxInput from '@/component/inputs/checkBoxInput/checkBoxInput.component'
import TextInput from '@/component/inputs/textInput/textInput.component'
import SelectInput from '@/component/inputs/selectInput/selectInput.componen'
import NotificationBox from '@/component/notificationBox/notificationBox.component'
import CheckboxContainer from '@/component/checkBoxContainer/checkboxContainer.component'
import Loader from '@/component/loader/loader.component'

import { Fragment, memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, SubmitHandler } from 'react-hook-form'

import { GameClasses, ClassRoles } from '../../../types/class.type'
import { AppDispatch, RootState } from '@/store/store'
import { GuildInitialState, GuildRoles, MemberInformation } from '@/store/guild/guild.type'
import { EquipInitialState } from '@/store/memberEquip/memberEquip.type'
import { AddMemberFormProps, FetchGameClasses } from './addMemberForm.type'
import { WindowContextState } from '@/store/windowContext/windowContext.type'

import { addPlayerToList, changeMemberData, resetIsChanged, resetIsAdded } from '@/store/guild/guild.slice'
import { changeEditMode } from '@/store/windowContext/windowContext.slice'
import { setPlayerEquip } from '@/store/memberEquip/memberEquip.slice'

import generateId from '@/utils/generateId.util'

import useFetch from '@/hook/useFetch/useFetch.hook'

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

	const { memberEquip } = useSelector<RootState, EquipInitialState>(state => state.playerEquipSlice)
	const { currentTab, isEditMode } = useSelector<RootState, WindowContextState>(state => state.windowContextSlice)
	const { guild, isAdded, isChanged } = useSelector<RootState, GuildInitialState>(state => state.guildSlice)

	const closeEditMode = () => dispatch(changeEditMode(false))

	const {
		register,
		handleSubmit,
		getValues,
		watch,
		reset,
		formState: { errors, isSubmitted },
	} = useForm<MemberInformation>({ defaultValues: { level: 34 } })

	const submitForm: SubmitHandler<MemberInformation> = newMemberData => {
		const newMember: MemberInformation = {
			...newMemberData,
			id: memberData ? memberData.id : generateId(),
			role: selectedClassRole!,
			guildRole: selectedGuildRole!,
			class: selectedClass!,
			equip: memberEquip,
		}

		if (!selectedClass) return

		if (memberData) {
			dispatch(changeMemberData(newMember))
			setTimeout(() => dispatch(resetIsChanged()), 2000)
		} else {
			dispatch(addPlayerToList(newMember))
			setTimeout(() => dispatch(resetIsAdded()), 2000)
		}
	}

	const validateName = (_str: string) => {
		let isOwned: boolean = false
		const memberName: string = getValues('name')

		guild?.guildMembers.forEach(member =>	member.name === memberName ? (isOwned = true) : (isOwned = false))

		if (memberName.length === 0 || isOwned)	return 'Name is to short or is owned!'
	}

	useEffect(() => {
		if (data) setClassOption(data.gameClasses)
		if (memberData && currentTab === 'Guild List!') {
			dispatch(setPlayerEquip(memberData.equip))
		} else {
			dispatch(setPlayerEquip({}))
			setClass(undefined)
			setClassRole(undefined)
			setGuildRole(undefined)
			reset()
		}
	}, [isLoading, isAdded, memberData])

	useEffect(() => {
		setClassRole(selectedClass?.classPlayebelRoles[0])
	}, [selectedClass])

	const isNotificationsVisibleSucces: boolean = isAdded || isChanged
	const isNotificationsVisibleError: boolean = Boolean(errors['name']) || (isSubmitted && !selectedClass)

	return (
		<Fragment>
			<NotificationBox
				type='error'
				isVisible={isNotificationsVisibleError}
				texts={[errors.name?.message!, 'You need to select Class!']}
			/>
			<NotificationBox
				type='succes'
				isVisible={isNotificationsVisibleSucces}
				texts={['Successfuly added!', 'Successfuly changed!']}
			/>
			<form
				className={scss.add_member_form}
				onSubmit={handleSubmit(submitForm)}>
				{isLoading ? (
					<Loader />
				) : (
					<Fragment>
						<div className={scss.add_member_inputs_container}>
							<div className={scss.add_member_inputs_body}>
								<header className={scss.add_member_header}>
									<h3> Member Information</h3>
								</header>
								<div style={{ margin: '0.5rem 0rem' }}>
									<TextInput<MemberInformation>
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
							<div className={scss.add_member_inputs_body}>
								<header className={scss.add_member_header}>
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
									<TextInput<MemberInformation>
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
						<div
							style={{ display: 'flex', flexDirection: 'column' }}
							className={scss.add_member_inputs_container}>
							<div className={scss.add_member_inputs_body}>
								<header className={scss.add_member_header}>
									<h3>Hero Equip</h3>
								</header>
								<MemberEquipEditorMemoized
									classEquipType={selectedClass?.enableEquipType}
									memberLVL={watch('level')}
									memberEquip={memberEquip}
								/>
							</div>
							<div className={scss.add_member_buttons_container}>
								<button
									className={
										isAdded || isChanged || isLoading
											? `${scss.add_button} ${scss.add_member_submitet_button} ${scss.add_member_submit_button}`
											: `${scss.add_button} ${scss.add_member_submit_button}`
									}
									type='submit'>
									{isAdded || isChanged || isLoading ? 'Submitet' : 'Submit'}
								</button>
								{memberData || isEditMode ? (
									<button
										className={`${scss.add_button} ${scss.add_member_close_button}`}
										onClick={closeEditMode}
										type='button'>
										Back
									</button>
								) : null}
							</div>
						</div>
					</Fragment>
				)}
			</form>
		</Fragment>
	)
}

export default AddMemberForm
