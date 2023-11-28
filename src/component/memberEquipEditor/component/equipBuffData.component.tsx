import scss from '../scss/equipBuffData.module.scss'

import { EquiBuffDataProps } from '../memberEquipEditor.type'
import { AppDispatch } from '@/store/store'

import { useDispatch } from 'react-redux'

import { buffEquipWith } from '@/store/memberEquip/memberEquip.slice'

import handlePercentageParams from '@/utils/handlePercentageParams.util'
import createEquipName from '@/utils/createEquipName.util'
import firstLetterToUpperCase from '@/utils/firstLetterToUpperCase.util'

import runeAndCrystal from '@/store/memberEquip/runeAndCrystal.data'

import paramIconSrc from '@/window/paramIconSrc'

const EquipBuffData = ({
	isChoseMode,
	selectedEquip,
	memberEquip
}: EquiBuffDataProps) => {
	const dispatch = useDispatch<AppDispatch>()

	return (
		<div className={isChoseMode.length > 0	? scss.buff_data_container : `${scss.buff_container} ${scss.buff_container_hidden}`}>
			{isChoseMode.length <= 0 ? null : (
				<p className={scss.buff_current_buff_type}>{firstLetterToUpperCase(isChoseMode)}s</p>
			)}
			{[...runeAndCrystal]
				.filter(
					buff =>
						buff.type === isChoseMode &&
						buff.equipType.includes(selectedEquip?.position || '') ||
						buff.equipType.includes(selectedEquip?.type || '')
				)
				.map(buff => {
					let buffName: string = ''
					let paramIcon: string = ''

					paramIcon = paramIconSrc[buff.name.search('P') > -1 ? buff.name.slice(0, -1) : buff.name]

					if (buff.name.split(' ').length >= 2) {
						buffName = buff.name.split(' ')[0] + buff.name.split(' ')[1]
					} else {
						buffName = buff.name
					}

					return buff.type === isChoseMode ? (
						<div
							key={Math.random() * 2023}
							onClick={() => dispatch(buffEquipWith(buff))}
							className={
								//@ts-ignore
								buffName === Object.keys(memberEquip[selectedEquip?.position]?.['rune'] || selectedEquip?.rune || {})[0]
									? `${scss.buff_body} ${scss.buff_selected}`
									//@ts-ignore
									: buffName === Object.keys(memberEquip[selectedEquip?.position]?.['crystal'] || selectedEquip?.crystal || {})[0]
									? `${scss.buff_body} ${scss.buff_selected}`
									: scss.buff_body
							}>
							{paramIcon && <img src={paramIcon}/>}
							<p className={scss.buff_title}>{firstLetterToUpperCase(createEquipName(buffName))}:</p>
							<p className={scss.buff_buff}>{handlePercentageParams(buff.name, buff.buff)}</p>
						</div>
					) : null
				})}
		</div>
	)
}

export default EquipBuffData
