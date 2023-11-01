import style from '../scss/equipList.module.scss'

import { EquipDataProps } from '../addPlayer.type'
import { AppDispatch, RootState } from '@/store/store'

import firstLetterToUpperCase from '@/utils/firstLetterToUpperCase.util'

import { useDispatch, useSelector } from 'react-redux'
import { choseEquip } from '@/store/playerEquip/playerEquip.slice'
import { PlayerInitialState } from '@/store/playerEquip/playerEquip.type'

const EquipData = ({
	setSelectedEquip,
	selectedEquip,
	closeThisList,
	equipType,
}: EquipDataProps) => {
	const equipDataEntries = Object.entries(selectedEquip || {})

	const dispatch = useDispatch<AppDispatch>()

	const { playerEquip } = useSelector<RootState, PlayerInitialState>(state => state.playerEquipSlice)

	const closeEquipDataWindow = () => setSelectedEquip(undefined)
	
	const pullUpOnEquip = () => {
		dispatch(choseEquip({ equip: selectedEquip, equipType }))
		setSelectedEquip(undefined)
		closeThisList()
	}

	let isEquiped = false

	const equipTypeValues = Object.values(playerEquip)

	for(let index = 0; index < equipTypeValues.length; index++) {
		const equipValues = Object.values(equipTypeValues[index])

		if(equipValues[0] === selectedEquip.name) isEquiped = true
	}

	return (
		<div className={style.equip_list_container}>
			<div className={style.equip_data_container}>
				<div>
					<div>
						<div className={style.equip_data_main_data}>
							<img src={selectedEquip.icon} />
							<p>{selectedEquip.name}</p>
						</div>
					</div>
					<div className={style.equip_data_parameters}>
						{equipDataEntries.map((element) =>
							element[0] === 'type' ||
							element[0] === 'icon' ||
							element[0] === 'name' ? null : (
								<div key={element[0]}>
									{firstLetterToUpperCase(element[0])}: {element[1]}
								</div>
							)
						)}
					</div>
				</div>
				<button
					onClick={pullUpOnEquip}
					className={style.equip_equip_button}
					type='button'
				>
					{isEquiped ? 'Unequip' : 'Equip'}
				</button>
			</div>
			<button
				type='button'
				onClick={closeEquipDataWindow}
				className={style.equip_list_close_button}
			>
				&#10006;
			</button>
		</div>
	)
}

export default EquipData
