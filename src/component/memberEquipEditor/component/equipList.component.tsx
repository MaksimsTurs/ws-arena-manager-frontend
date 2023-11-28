import scss from '../scss/equipList.module.scss'

import { EquiListProps } from '../memberEquipEditor.type'
import { AppDispatch } from '@/store/store'

import { useDispatch } from 'react-redux'
import { Fragment } from 'react'

import { selectEquipToCheck } from '@/store/memberEquip/memberEquip.slice'

import Loader from '@/component/loader/loader.component'
import ComplexSelect from '@/component/complexSelect/complexSelect.component'

const EquipList = ({
	equipData,
	isLoading,
}: EquiListProps) => {
	const dispatch = useDispatch<AppDispatch>()

	return (
		<Fragment>
			{isLoading ? (
				<Loader />	
			) : (
				<Fragment>
					{equipData.map(equip => (
						<div
							//@ts-ignore
							onClick={() => dispatch(selectEquipToCheck(equip))}
							className={scss.equip_list_item}
							key={equip.name}>
							<ComplexSelect backgroundIMG={equip.icon} />
							<p>{equip.name} {equip.lvl}LVL</p>
						</div>
					))}
				</Fragment>
			)}
		</Fragment>
	)
}

export default EquipList
