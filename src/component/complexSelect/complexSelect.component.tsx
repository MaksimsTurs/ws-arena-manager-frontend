import style from './complexSelect.module.scss'

import { WindowContextState } from '@/store/windowContext/windowContext.type'
import { AppDispatch, RootState } from '@/store/store'
import { ComplexSelectProps } from './complexSelect.typ'

import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectEquipToCheck } from '@/store/playerEquip/playerEquip.slice'

import slotBorder from './slot-border.png?format=webp&prest=thumbnail'

import handlePercentageParams from '@/utils/handlePercentageParams.util'

const ComplexSelect = ({
	backgroundIMG,
	setEquipWindowVisible,
	equipPosition,
	memberEquip,
	onClick,
	className,
	renederElement,
}: ComplexSelectProps) => {
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const { currentTab, isEditMode } = useSelector<RootState, WindowContextState>(
		state => state.windowContextSlice
	)

	const showEqipWindow = () => {
		if (setEquipWindowVisible) {
			if (currentTab === 'Add Member!' || isEditMode) {
				navigate(`/?equip-position=${equipPosition}`)
				setEquipWindowVisible(true)
			} else if (!isEditMode) {
				//TODO: Type fix!
				//@ts-ignore
				dispatch(selectEquipToCheck(memberEquip[equipPosition]))
			}
		}
	}

	return (
		<Fragment>
			{renederElement ? (
				<div onClick={setEquipWindowVisible ? showEqipWindow : onClick ? onClick : undefined}
					className={`${style.equip_select_container} ${className}`}
					style={{background: `url(${backgroundIMG}) 50% 42% / 65% 63% no-repeat`}}>
					<div className={style.equip_param_buff_container}>
						<p>{handlePercentageParams(renederElement.element)}</p>
					</div>
					<img className={style.equip_select_with_element} src={slotBorder} />
				</div>
			) : (
				<div onClick={setEquipWindowVisible ? showEqipWindow : onClick ? onClick : undefined }
					className={`${style.equip_select_container} ${className}`}
					style={{background: `url(${backgroundIMG}) 50% 42% / 65% 63% no-repeat`}}>
					<img className={style.equip_select_slot} src={slotBorder} />
				</div>
			)}
		</Fragment>
	)
}

export default ComplexSelect
