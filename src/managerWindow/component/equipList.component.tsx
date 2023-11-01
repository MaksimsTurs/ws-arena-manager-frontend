import { EquipListProps } from '../managerWindow.type'
import style from '../scss/equipList.module.scss'

import slotBorder from '../editorIMG/slots/slot-border.png'
import { Fragment, useState } from 'react'
import { EquipParameters } from '../data/data.type'
import _3 from '../editorIMG/equip/3.webp'
import firstLetterToUpperCase from '@/utils/firstLetterToUpperCase.util'

const EquipList = ({
	setPlayerEquip,
	equipData,
	equipType,
	isVisible,
	setEquipListVisible,
}: EquipListProps) => {
	const [selectedEquip, setSelectedEquip] = useState<
		EquipParameters | undefined
	>(undefined)
	const closeThisList = () => setEquipListVisible(false)
	const closeEquipDataWindow = () => setSelectedEquip(undefined)

	let equipString: string = ''

	if (equipType.split(/[A-Z]/)[1]) {
		equipString = `r${equipType.split(/[A-Z]/)[1]}`
	} else {
		equipString = equipType
	}

	const equipDataEntries = Object.entries(selectedEquip || {})

	return (
		<Fragment>
			{selectedEquip ? (
				<div
					className={
						isVisible
							? style.equip_list_container
							: `${style.equip_list_container} ${style.equip_list_hidden}`
					}
				>
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
							onClick={() => {
								setPlayerEquip((prev) => {
									const currentEquip = Object.keys(prev || {})
									if (currentEquip.length === 0)
										return {
											[equipType || selectedEquip.type]: { ...selectedEquip },
										}
									for (let index = 0; index < currentEquip.length; index++) {
										if (selectedEquip.type.includes(currentEquip[index])) {
											// @ts-ignore
											delete prev[currentEquip[index]]
											return {
												...prev,
											}
										} else {
											return {
												...prev,
												[equipType || selectedEquip.type]: { ...selectedEquip },
											}
										}
									}
								})
								setSelectedEquip(undefined)
								closeThisList()
							}}
							className={style.equip_equip_button}
							type='button'
						>
							Equip
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
			) : (
				<div
					className={
						isVisible
							? style.equip_list_container
							: `${style.equip_list_container} ${style.equip_list_hidden}`
					}
				>
					<div>
						{equipData
							.filter((element) => element.type === equipString)
							.map((element) => (
								<div
									onClick={() => setSelectedEquip(element)}
									className={style.equip_list_item}
									key={element.name}
								>
									<img className={style.equip_item_icon} src={element.icon} />
									<img src={slotBorder} alt={element.name} />
									<p>
										{element.name} {element.lvl}LVL
									</p>
								</div>
							))}
					</div>
					<button
						type='button'
						onClick={closeThisList}
						className={style.equip_list_close_button}
					>
						&#10006;
					</button>
				</div>
			)}
		</Fragment>
	)
}

export default EquipList
