import style from '../scss/equipSelect.module.scss'

import { EquipSelectProps } from '../addPlayer.type'

import { useNavigate } from 'react-router-dom'

import slotBorder from '../img/slotPlaceholder/slot-border.png?format=webp&prest=thumbnail'

const EquipSelect = ({
	setEquipListVisible,
	backgroundImg,
	equipType,
}: EquipSelectProps) => {
	const navigate = useNavigate()

	const showEquipListAndChoseEquipType = () => {
		setEquipListVisible(true)
		navigate(`/?equip-type=${equipType}`)
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
