import style from '../scss/equipData.module.scss'

import { EquipDataProps } from '../memberEquipEditor.type'
import { AppDispatch } from '@/store/store'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import EquipParameters from './equipParameters.component'
import EquipBuffData from './equipBuffData.component'

import {
	pullOn,
	pullUp,
	selectEquipToCheck,
} from '@/store/playerEquip/playerEquip.slice'

const EquipData = ({
	equipPosition,
	closeThisWindow,
	selectedEquip,
	currentTab,
	memberEquip,
	isEditMode,
}: EquipDataProps) => {
	let isEquiped = false
	const [buff, setBuff] = useState<string>('')

	const dispatch = useDispatch<AppDispatch>()

	const equipTypeValues = Object.entries(memberEquip)

	const pullUpOnEquip = () => {
		if (isEquiped) {
			dispatch(pullUp(equipPosition))
		} else {
			//TODO: Fix type error!
			//@ts-ignore
			dispatch(pullOn({ equip: selectedEquip, equipPosition }))
		}
		dispatch(selectEquipToCheck(undefined))
		closeThisWindow()
	}

	for (let index = 0; index < equipTypeValues.length; index++) {
		for (let [key] of equipTypeValues) {
			if (key === equipPosition) {
				isEquiped = true
				break
			}
		}
	}

	return (
		<div className={style.equip_data_container}>
			<div className={style.equip_data_body}>
				<EquipParameters setChoseMode={setBuff} selectedEquip={selectedEquip}/>
				<EquipBuffData isChoseMode={buff} selectedEquip={selectedEquip} />
			</div>
			{currentTab === 'Add Member!' || isEditMode ? (
				<button
					onClick={pullUpOnEquip}
					className={style.equip_equip_button}
					type='button'>
					{isEquiped ? 'Unequip' : 'Equip'}
				</button>
			) : null}
		</div>
	)
}

export default EquipData
