import style from '../scss/equipBuffData.module.scss'

import { EquiBuffDataProps } from '../memberEquipEditor.type'
import { AppDispatch } from '@/store/store'

import { useDispatch } from 'react-redux'

import { buffEquipWith } from '@/store/playerEquip/playerEquip.slice'

import handlePercentageParams from '@/utils/handlePercentageParams.util'
import createEquipName from '@/utils/createEquipName.util'
import firstLetterToUpperCase from '@/utils/firstLetterToUpperCase.util'

import runeAndCrystal from '@/store/playerEquip/runeAndCrystal.data'

import paramIconSrc from '@/managerWindow/paramIconSrc'

const EquipBuffData = ({
	isChoseMode,
	selectedEquip,
}: EquiBuffDataProps) => {
	const dispatch = useDispatch<AppDispatch>()

	return (
		<div className={isChoseMode.length > 0	? style.buff_data_container : `${style.buff_container} ${style.buff_container_hidden}`}>
			{isChoseMode.length <= 0 ? null : (
				<p className={style.buff_current_buff_type}>{firstLetterToUpperCase(isChoseMode)}s</p>
			)}
			{[...runeAndCrystal]
				.filter(
					buff =>
						buff.type === isChoseMode &&
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
								buffName === Object.keys(selectedEquip?.rune || {})[0]
									? `${style.buff_body} ${style.buff_selected}`
									: buffName === Object.keys(selectedEquip?.crystal || {})[0]
									? `${style.buff_body} ${style.buff_selected}`
									: style.buff_body
							}>
							{paramIcon && <img src={paramIcon}/>}
							<p className={style.buff_title}>{firstLetterToUpperCase(createEquipName(buffName))}:</p>
							<p className={style.buff_buff}>{handlePercentageParams(buff.buff)}</p>
						</div>
					) : null
				})}
		</div>
	)
}

export default EquipBuffData
