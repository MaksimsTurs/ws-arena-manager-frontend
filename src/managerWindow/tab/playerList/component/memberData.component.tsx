import style from '../scss/memberData.module.scss'

import PlayerEquipEditor from '../../../../component/memberEquipEditor/memberEquipEditor.component'

import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/store'
import { Fragment } from 'react'

import { MemberDataProps } from '../memberList.type'

import { kickMember } from '@/store/guild/guild.slice'
import { resetIsKicked } from '@/store/guild/guild.slice'

import handlePercentageParams from '@/utils/handlePercentageParams.util'
import createEquipName from '@/utils/createEquipName.util'
import firstLetterToUpperCase from '@/utils/firstLetterToUpperCase.util'
import { changeEditMode } from '@/store/windowContext/windowContext.slice'

const MemberData = ({
	memberData,
	setSelectedName,
}: MemberDataProps) => {
	const dispatch = useDispatch<AppDispatch>()
	
	const closeMemberWindow = () => setSelectedName(undefined)

	const openEditForm = () => dispatch(changeEditMode(true))

	const kickThisMember = () => {
		dispatch(kickMember(memberData.id))
		setTimeout(() => dispatch(resetIsKicked()), 2000)
		closeMemberWindow()
	}

	const color: string =
		memberData.role.className === 'Attack'
			? 'red'
			: memberData.role.className === 'Support'
			? 'rgb(82, 149, 255)'
			: memberData.role.className === 'Tank'
			? 'green'
			: 'white'

	const excludeWords: string[] = ['name', 'type', 'icon', 'position', 'lvl', 'healtP', 'magicDamageP', 'magicDefenceP', 'physicDamageP', 'physicDefenceP']
	const characterParameters = Object.entries(memberData.playerParameters)

	return (
		<div
			className={memberData ? style.member_container : `${style.member_container} ${style.member_container_hidden}`}>
			<div className={style.member_body}>
				<div className={style.member_header}>
					<img
						src={memberData.class.classIcon}
						alt={memberData.class.className}
					/>
					<div>
						<p className={style.member_header_name}>{memberData.name} {memberData.level}LVL</p>
						<div className={style.member_role_container}>
							<img
								className={style.member_role_icon}
								src={memberData.role.classIcon}
								alt={memberData.role.className}
							/>
							<p style={{ color }}>{memberData.role.className}</p>
						</div>
					</div>
				</div>
				<div className={style.member_parameters_container}>
					<div>
						<p className={style.member_parameters_container_title}>Social Medias:</p>
						<div className={style.member_social_medies}>
							<div>
								<p>Telegram</p>
								<p className={
										memberData.telegram
											? `${style.member_status} ${style.member_have_it}`
											: `${style.member_dont_have_it} ${style.member_status}`
									}>
									{memberData.telegram}
								</p>
							</div>
							<div>
								<p>Discord</p>
								<p
									className={
										memberData.discord
											? `${style.member_status} ${style.member_have_it}`
											: `${style.member_dont_have_it} ${style.member_status}`
									}>
									{memberData.discord}
								</p>
							</div>
						</div>
					</div>
					<div>
						<p className={style.member_parameters_container_title}>Character parameters:</p>
						{characterParameters.map(parameter => {
							const equipData = parameter[1] as number
							const equipTitle: string = firstLetterToUpperCase(createEquipName(parameter[0]))

							return !excludeWords.includes(parameter[0]) ? (
								<div className={style.member_parameter_body} key={parameter[0]}>
									{!(equipData === 0 || equipData < 0.0) ? (
										<Fragment>
											<p className={style.member_parameter_name}>{equipTitle}:</p>
											<p className={style.member_parameter_stat}>{handlePercentageParams(equipData)}</p>
										</Fragment>
									) : null}
								</div>
							) : null
						})}
					</div>
				</div>
				<button
						className={style.member_close_button}
						type='button'
						onClick={closeMemberWindow}>
						&#10005;
					</button>
				<div className={style.memeber_action_menu_container}>
					<button onClick={openEditForm} className={style.member_action_button}>
						Edit
					</button>
					<button
						onClick={kickThisMember}
						className={style.member_action_button}>
						Kick
					</button>
				</div>
				<PlayerEquipEditor  memberEquip={memberData.equip} />
			</div>
		</div>
	)
}
export default MemberData
