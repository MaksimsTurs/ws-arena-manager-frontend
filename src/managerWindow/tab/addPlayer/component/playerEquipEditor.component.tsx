//@ts-nocheck
import style from '../scss/playerEquipEditor.module.scss'

import { PlayerEquipEditorProps } from '../addPlayer.type'

import { Fragment, useState } from 'react'

import slotCloak from '../img/slotPlaceholder/slots-cloak.png?format=webp&prest=thumbnail'
import slotHead from '../img/slotPlaceholder/slots-head.png?format=webp&prest=thumbnail'
import slotAmulet from '../img/slotPlaceholder/slots-amulet.png?format=webp&prest=thumbnail'
import slotBody from '../img/slotPlaceholder/slots-body.png?format=webp&prest=thumbnail'
import slotGloves from '../img/slotPlaceholder/slots-glove.png?format=webp&prest=thumbnail'
import slotWeapon from '../img/slotPlaceholder/slots-weapon.png?format=webp&prest=thumbnail'
import slotBoots from '../img/slotPlaceholder/slots-boots.png?format=webp&prest=thumbnail'
import slotSash from '../img/slotPlaceholder/slots-sash.png?format=webp&prest=thumbnail'
import slotRing from '../img/slotPlaceholder/slots-ring.png?format=webp&prest=thumbnail'

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

import EquipListContainer from './equipListContainer.component'
import EquipSelect from './equipSelect.component'

const PlayerEquipEditor = ({ playerEquip }: PlayerEquipEditorProps) => {
	const [isEquipListVisible, setEquipListVisible] = useState<boolean>(false)

	return (
		<Fragment>
			<div className={style.equip_data_body}>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='cloak'
					backgroundImg={playerEquip?.cloak?.icon! || slotCloak}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='head'
					backgroundImg={playerEquip?.head?.icon! || slotHead}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='amulet'
					backgroundImg={playerEquip?.amulet?.icon! || slotAmulet}
				/>
			</div>
			<div className={style.equip_data_body}>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='weapon'
					backgroundImg={playerEquip?.weapon?.icon! || slotWeapon}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='body'
					backgroundImg={playerEquip?.body?.icon! || slotBody}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='gloves'
					backgroundImg={playerEquip?.gloves?.icon! || slotGloves}
				/>
			</div>
			<div className={style.equip_data_body_center}>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='sash'
					backgroundImg={playerEquip?.sash?.icon! || slotSash}
				/>
			</div>
			<div className={style.equip_data_body}>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='rightRing'
					backgroundImg={playerEquip?.rightRing?.icon! || slotRing}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='boots'
					backgroundImg={playerEquip?.boots?.icon! || slotBoots}
				/>
				<EquipSelect
					setEquipListVisible={setEquipListVisible}
					equipType='leftRing'
					backgroundImg={playerEquip?.leftRing?.icon! || slotRing}
				/>
			</div>
			<EquipListContainer
				isEquipListVisible={isEquipListVisible}
				setEquipListVisible={setEquipListVisible}
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
			/>
		</Fragment>
	)
}

export default PlayerEquipEditor
