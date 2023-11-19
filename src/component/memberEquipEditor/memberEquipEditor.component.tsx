import style from './memberEquipEditor.module.scss'

import { MemberEquipEditorProps } from './memberEquipEditor.type'

import { useState } from 'react'

import EquipWindow from './component/equipWindow.component'
import ComplexSelect from '../complexSelect/complexSelect.component'

import slotCloak from './slotIcon/slots-cloak.png?format=webp&prest=thumbnail'
import slotHead from './slotIcon/slots-head.png?format=webp&prest=thumbnail'
import slotAmulet from './slotIcon/slots-amulet.png?format=webp&prest=thumbnail'
import slotBody from './slotIcon/slots-body.png?format=webp&prest=thumbnail'
import slotGloves from './slotIcon/slots-glove.png?format=webp&prest=thumbnail'
import slotWeapon from './slotIcon/slots-weapon.png?format=webp&prest=thumbnail'
import slotBoots from './slotIcon/slots-boots.png?format=webp&prest=thumbnail'
import slotSash from './slotIcon/slots-sash.png?format=webp&prest=thumbnail'
import slotRing from './slotIcon/slots-ring.png?format=webp&prest=thumbnail'

const PlayerEquipEditor = ({
	memberEquip,
	memberLVL,
	classEquipType,
}: MemberEquipEditorProps) => {
	const [isEquipWindowVisilbe, setEquipWindowVisilbe] = useState<boolean>(false)

	return (
		<div className={style.equip_select_container}>
			<div className={style.equip_select_body}>
				<ComplexSelect
					equipPosition='cloak'
					backgroundIMG={memberEquip.cloak?.icon || slotCloak}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
				<ComplexSelect
					equipPosition='head'
					backgroundIMG={memberEquip.head?.icon || slotHead}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
				<ComplexSelect
					equipPosition='amulet'
					backgroundIMG={memberEquip.amulet?.icon || slotAmulet}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
			</div>
			<div className={style.equip_select_body_center}>
				<ComplexSelect
					equipPosition='weapon'
					backgroundIMG={memberEquip.weapon?.icon || slotWeapon}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
				<ComplexSelect
					equipPosition='body'
					backgroundIMG={memberEquip.body?.icon || slotBody}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
				<ComplexSelect
					equipPosition='gloves'
					backgroundIMG={memberEquip.gloves?.icon || slotGloves}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
			</div>
			<div className={style.equip_select_body_center}>
				<ComplexSelect
					equipPosition='sash'
					backgroundIMG={memberEquip.sash?.icon || slotSash}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
			</div>
			<div className={style.equip_select_body}>
				<ComplexSelect
					equipPosition='leftRing'
					backgroundIMG={memberEquip.leftRing?.icon || slotRing}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
				<ComplexSelect
					equipPosition='boots'
					backgroundIMG={memberEquip.boots?.icon || slotBoots}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
				<ComplexSelect
					equipPosition='rightRing'
					backgroundIMG={memberEquip.rightRing?.icon || slotRing}
					memberEquip={memberEquip}
					setEquipWindowVisible={setEquipWindowVisilbe}
				/>
			</div>
			<EquipWindow
				classEquipType={classEquipType}
				memberLVL={memberLVL}
				setEquipWindowVisilbe={setEquipWindowVisilbe}
				isEquipWindowVisilbe={isEquipWindowVisilbe}
			/>
		</div>
	)
}

export default PlayerEquipEditor
