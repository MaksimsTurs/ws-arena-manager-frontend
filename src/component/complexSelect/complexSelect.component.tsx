import scss from './complexSelect.module.scss'

import { WindowContextState } from '@/store/windowContext/windowContext.type'
import { AppDispatch, RootState } from '@/store/store'
import { ComplexSelectProps } from './complexSelect.typ'

import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectEquipToCheck } from '@/store/memberEquip/memberEquip.slice'

import slotBorder from './img/slot-border.png?format=webp&prest=thumbnail'

const ComplexSelect = ({
	backgroundIMG,
	setEquipWindowVisible,
	equipPosition,
	memberEquip,
	onClick,
	className,
	renederElement,
	compare,
}: ComplexSelectProps) => {	
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const { currentTab, isEditMode } = useSelector<RootState, WindowContextState>(state => state.windowContextSlice)

	const showEqipWindow = () => {
		if (setEquipWindowVisible) {
			if (currentTab === 'Add Member!' || isEditMode) {
				navigate(`/?equip-position=${equipPosition}`)
				setEquipWindowVisible(true)
			} else if (!isEditMode) {
				//@ts-ignore
				dispatch(selectEquipToCheck(memberEquip[equipPosition]))
			}
		}
	}
	
	let difference: number = 0
	let differenceText: string | number = difference < 0 ? difference : `+${difference}`

	const onClickAtrr = setEquipWindowVisible && showEqipWindow || onClick && onClick
	const differenceColor: string = difference < 0 ? 'red' : 'green'


	if (compare) {
		difference =
			compare.numbOne && compare.numbTwo
				? Number((compare.numbOne - compare.numbTwo).toFixed(0))
				: compare.numbOne
				? compare.numbOne - 0
				: compare.numbTwo
				? compare.numbTwo - 0
				: 0
	}

	return (
		<Fragment>
			{renederElement ? (
				<div
					className={`${scss.equip_select_container} ${className}`}
					onClick={onClickAtrr}
					style={{ background: `url(${backgroundIMG}) 50% 42% / 65% 63% no-repeat` }}>
					<div className={scss.equip_param_buff_container}>
						{Boolean(difference) && (<p style={{ color: differenceColor }}>{differenceText}</p>)}
						<p>{renederElement.element}</p>
					</div>
					<img className={scss.equip_select_with_element} src={slotBorder} />
				</div>
			) : (
				<div
					className={`${scss.equip_select_container} ${className}`}
					onClick={onClickAtrr}
					style={{ background: `url(${backgroundIMG}) 50% 42% / 65% 63% no-repeat` }}>
					<img className={scss.equip_select_slot} src={slotBorder} />
				</div>
			)}
		</Fragment>
	)
}

export default ComplexSelect
