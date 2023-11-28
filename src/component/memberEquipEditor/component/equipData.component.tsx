import scss from '../scss/equipData.module.scss'

import { EquipDataProps } from '../memberEquipEditor.type'
import { AppDispatch } from '@/store/store'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import EquipParameters from './equipParameters.component'
import EquipBuffData from './equipBuffData.component'

import { pullOn, pullUp, selectEquipToCheck } from '@/store/memberEquip/memberEquip.slice'

const EquipData = ({
	equipPosition,
	closeThisWindow,
	selectedEquip,
	currentTab,
	memberEquip,
	isEditMode,
}: EquipDataProps) => {
	const [buff, setBuff] = useState<string>('')

	const dispatch = useDispatch<AppDispatch>()

	const pullUpOnEquip = () => {
		//@ts-ignore
		if (memberEquip[equipPosition]) {
			dispatch(pullUp(equipPosition))
		} else {
			//@ts-ignore
			dispatch(pullOn({ equip: selectedEquip, equipPosition }))
		}
		dispatch(selectEquipToCheck(undefined))
		closeThisWindow()
	}

	return (
		<div className={scss.equip_data_container}>
			<div className={scss.equip_data_body}>
				<EquipParameters 
					setChoseMode={setBuff}  
					selectedEquip={selectedEquip} 
					memberEquip={memberEquip}
				/>
				<EquipBuffData
					isChoseMode={buff}
					selectedEquip={selectedEquip}
					memberEquip={memberEquip}
				/>
			</div>
			{currentTab === 'Add Member!' || isEditMode ? (
				<button
					onClick={pullUpOnEquip}
					className={scss.equip_equip_button}
					type='button'>
					{/* @ts-ignore */}
					{memberEquip[equipPosition] ? 'Unequip' : 'Equip'}
				</button>
			) : null}
		</div>
	)
}

export default EquipData
