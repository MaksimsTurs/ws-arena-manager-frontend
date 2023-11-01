import { EquipListContainerProps } from '../addPlayer.type'
import { GameParameters } from '../data/type/gameParameters.type'

import { Fragment, useState } from 'react'
import { useLocation } from 'react-router-dom'

import EquipData from './equipData.component'
import EquipList from './equipList.component'

const EquipListContainer = ({
	isEquipListVisible,
	setEquipListVisible,
	equipData,
}: EquipListContainerProps) => {
	const [selectedEquip, setSelectedEquip] = useState<
		GameParameters | undefined
	>(undefined)
	const equipType = useLocation().search.replace('?equip-type=', ' ').trim()

	const closeThisList = () => setEquipListVisible(false)

	let equipString: string = ''

	if (equipType.split(/[A-Z]/)[1]) {
		equipString = `r${equipType.split(/[A-Z]/)[1]}`
	} else {
		equipString = equipType
	}

	return (
		<Fragment>
			{selectedEquip ? (
				<EquipData
					selectedEquip={selectedEquip}
					equipType={equipType}
					setSelectedEquip={setSelectedEquip}
					closeThisList={closeThisList}
				/>
			) : (
				<EquipList
					closeThisList={closeThisList}
					setSelectedEquip={setSelectedEquip}
					equipData={equipData}
					equipType={equipString}
					isEquipListVisible={isEquipListVisible}
				/>
			)}
		</Fragment>
	)
}

export default EquipListContainer
