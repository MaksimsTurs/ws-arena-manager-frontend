import style from '../scss/memberData.module.scss'
import { MemberDataProps } from '../memberList.type'
import paramIconSrc from '@/window/paramIconSrc'
import ComplexSelect from '@/component/complexSelect/complexSelect.component'
import firstLetterToUpperCase from '@/utils/firstLetterToUpperCase.util'
import createEquipName from '@/utils/createEquipName.util'
import handlePercentageParams from '@/utils/handlePercentageParams.util'

const MemberData = ({
	memberData,
	compareDataOne,
	compareDataTwo,
}: MemberDataProps) => {
	const characterParams = Object.entries(memberData.playerParameters)
	const excludeWords: string[] = [
		'name',
		'type',
		'icon',
		'position',
		'lvl',
		'healtP',
		'magicDamageP',
		'magicDefenceP',
		'physicDamageP',
		'physicDefenceP',
	]
	const roleColor: string =
		memberData.role.className === 'Attack'
			? 'red'
			: memberData.role.className === 'Support'
			? 'rgb(82, 149, 255)'
			: memberData.role.className === 'Tank'
			? 'green'
			: 'white'

	return (
		<div
			className={compareDataOne ? `${style.member_data_body} ${style.member_data_body_split}` : style.member_data_body }>
			<div className={style.member_data_header}>
				<img
					className={style.member_data_class_icon}
					src={memberData.class.classIcon}
				/>
				<div>
					<p>
						{memberData.name} {memberData.level}LVL
					</p>
					<div className={style.member_data_role}>
						<img
							className={style.member_data_role_icon}
							src={memberData.role.classIcon}
						/>
						<p style={{ color: roleColor, fontSize: '1rem' }}>
							{memberData.role.className}
						</p>
					</div>
				</div>
			</div>
			<div className={style.member_data_parameters}>
				{characterParams.map(parameter => {
					const equipData = parameter[1] as number
					const equipTitle: string = firstLetterToUpperCase(
						createEquipName(parameter[0])
					)

					return !excludeWords.includes(parameter[0]) &&
						!(equipData === 0 || equipData < 0.0) ? (
						<div className={style.member_parameter_body} key={parameter[0]}>
							<ComplexSelect
								backgroundIMG={
									paramIconSrc[
										parameter[0].search('P') > -1
											? parameter[0].slice(0, -1)
											: parameter[0]
									]
								}
								compare={
									compareDataOne && compareDataTwo
										? {
												numbOne: compareDataOne.get(parameter[0]),
												numbTwo: compareDataTwo.get(parameter[0]),
										  }
										: undefined
								}
								renederElement={{
									element: handlePercentageParams(equipTitle, equipData),
								}}
							/>
						</div>
					) : null
				})}
			</div>
		</div>
	)
}

export default MemberData
