import { EquipSelectProps } from '../managerWindow.type'
import style from '../scss/equipSelect.module.scss'

import slotBorder from '../editorIMG/slots/slot-border.png'

const EquipSelect = ({
	backgroundImg,
	setEquipType,
	equipType,
	setEquipListVisible,
}: EquipSelectProps) => {
	const showEquipListAndChoseEquipType = () => {
		setEquipListVisible(true)
		setEquipType(equipType)
	}

	return (
		<div
			onClick={showEquipListAndChoseEquipType}
			className={style.equip_select_container}
		>
			<img className={style.equip_select_background} src={backgroundImg} />
			<img className={style.equip_select_slot} src={slotBorder} />
		</div>
	)
}

export default EquipSelect
