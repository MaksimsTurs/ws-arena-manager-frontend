import { PlayerEquipEditorProps } from '../managerWindow.type'
import style from '../scss/playerEquipEditor.module.scss'

import slotCloak from '../editorIMG/slots/slots-cloak.png'
import slotHead from '../editorIMG/slots/slots-head.png'
import slotAmulet from '../editorIMG/slots/slots-amulet.png'
import slotBody from '../editorIMG/slots/slots-body.png'
import slotGloves from '../editorIMG/slots/slots-glove.png'
import slotWeapon from '../editorIMG/slots/slots-weapon.png'
import slotBoots from '../editorIMG/slots/slots-boots.png'
import slotSash from '../editorIMG/slots/slots-sash.png'
import slotRing from '../editorIMG/slots/slots-ring.png'

import EquipSelect from './equipSelect.component'
import {
	amuletEquip,
	cloakEquip,
	headEquip,
	bodyEquip,
	bootsEquip,
	gloveEquip,
	ringEquip,
	sashEquip,
	weaponEquip,
} from '../data/equip.data'
import EquipList from './equipList.component'
import { Fragment, useState } from 'react'
import { EquipTypes } from '../data/data.type'

const PlayerEquipEditor = ({
	setPlayerEquip,
	playerEquip,
}: PlayerEquipEditorProps) => {
	const [equipType, setEquipType] = useState<EquipTypes>('body')
	const [isEquipListVisible, setEquipListVisible] = useState<boolean>(false)

	return (
		<Fragment>
			<div className={style.equip_data_body}>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='cloak'
					backgroundImg={playerEquip?.cloak?.icon! || slotCloak}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='head'
					backgroundImg={playerEquip?.head?.icon! || slotHead}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='amulet'
					backgroundImg={playerEquip?.amulet?.icon! || slotAmulet}
				/>
			</div>
			<div className={style.equip_data_body}>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='weapon'
					backgroundImg={playerEquip?.weapon?.icon! || slotWeapon}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='body'
					backgroundImg={playerEquip?.body?.icon! || slotBody}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='gloves'
					backgroundImg={playerEquip?.gloves?.icon! || slotGloves}
				/>
			</div>
			<div className={style.equip_data_body_center}>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='sash'
					backgroundImg={playerEquip?.sash?.icon! || slotSash}
				/>
			</div>
			<div className={style.equip_data_body}>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='rightRing'
					backgroundImg={playerEquip?.rightRing?.icon! || slotRing}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='boots'
					backgroundImg={playerEquip?.boots?.icon! || slotBoots}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					setEquipType={setEquipType}
					equipType='leftRing'
					backgroundImg={playerEquip?.leftRing?.icon! || slotRing}
				/>
			</div>
			<EquipList
				isVisible={isEquipListVisible}
				setEquipListVisible={setEquipListVisible}
				setPlayerEquip={setPlayerEquip}
				equipData={[
					...cloakEquip,
					...headEquip,
					...bodyEquip,
					...bootsEquip,
					...ringEquip,
					...sashEquip,
					...weaponEquip,
					...gloveEquip,
					...amuletEquip,
				]}
				equipType={equipType}
			/>
		</Fragment>
	)
}

export default PlayerEquipEditor
