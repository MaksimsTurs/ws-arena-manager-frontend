import style from '../scss/equipList.module.scss'

import { EquiListProps } from '../addPlayer.type'

import slotBorder from '../img/slotPlaceholder/slot-border.png?format=webp&prest=thumbnail'

const EquipList = ({
	isEquipListVisible,
	equipData,
	equipType,
	closeThisList,
	setSelectedEquip,
}: EquiListProps) => {
	return (
		<div
			className={
				isEquipListVisible
					? style.equip_list_container
					: `${style.equip_list_container} ${style.equip_list_hidden}`
			}
		>
			<div>
				{equipData
					.filter((element) => element.type === equipType)
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
	)
}

export default EquipList
