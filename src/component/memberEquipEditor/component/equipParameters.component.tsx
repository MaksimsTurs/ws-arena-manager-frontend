import style from '../scss/equipParameters.module.scss'

import { useSelector } from 'react-redux'
import { EquipParametersProps } from '../memberEquipEditor.type'
import { WindowContextState } from '@/store/windowContext/windowContext.type'
import { RootState } from '@/store/store'

import crystalSlot from '../slotIcon/slot-crystal.png?format=webp&prest=thumbnail'
import runeSlot from '../slotIcon/slots-rune.png?format=webp&prest=thumbnail'

import paramIconSrc from '@/managerWindow/paramIconSrc'

import ComplexSelect from '@/component/complexSelect/complexSelect.component'
import { Fragment } from 'react'

const EquipParameters = ({
	selectedEquip,
	setChoseMode,
}: EquipParametersProps) => {
	const equipDataEntries = Object.entries(selectedEquip || {})
	const excludeWords: string[] = ['lvl', 'rune', 'crystal', 'name', 'type', 'icon', 'position', '_id']

	const { isEditMode, currentTab } = useSelector<RootState, WindowContextState>(state => state.windowContextSlice)

	let selectedRuneBuff = {
		name: '',
		buff: 0,
	}

	let selectedCrystalBuff = {
		name: '',
		buff: 0,
	}

	for (let [key, value] of equipDataEntries) {
		if (key === 'crystal') {
			const crystalEntries = Object.entries(value)[0]
			selectedCrystalBuff.buff = crystalEntries[1] as number
			selectedCrystalBuff.name = crystalEntries[0]
		}

		if (key === 'rune') {
			const runeEntries = Object.entries(value)[0]
			selectedCrystalBuff.buff = runeEntries[1] as number
			selectedCrystalBuff.name = runeEntries[0]
		}
	}

	const choseCrystal = () => {
		if (currentTab !== 'Add Member!' && !isEditMode) return
		setChoseMode(prev => (prev.length > 0 && prev !== 'rune' ? '' : 'crystal'))
	}

	const choseRune = () => {
		if (currentTab !== 'Add Member!' && !isEditMode) return
		setChoseMode(prev => (prev.length > 0 && prev !== 'crystal' ? '' : 'rune'))
	}

	return (
		<Fragment>
			<div className={style.equip_header_container}>
				<img src={selectedEquip?.icon} />
				<p className={style.equip_name}>
					{selectedEquip?.name} {selectedEquip?.lvl}LVL
				</p>
			</div>
			<div>
				<div className={style.equip_parameters_container}>
					{equipDataEntries.map(element => {
						let equipData: number = element[1] as number
						let paramIcon: string = ''

						if (![...excludeWords, 'lvl'].includes(element[0])) {
							paramIcon =
								paramIconSrc[
									element[0].search('P') > -1
										? element[0].slice(0, -1)
										: element[0]
								]
						}

						return !excludeWords.includes(element[0]) ? (
							<ComplexSelect
								key={element[0]}
								renederElement={{ element: equipData }}
								backgroundIMG={paramIcon}
							/>
						) : null
					})}
				</div>
				<div className={style.equip_buff_container}>
					<ComplexSelect
						backgroundIMG={paramIconSrc[selectedCrystalBuff.name] || crystalSlot}
						renederElement={{ element: selectedCrystalBuff.buff }}
						onClick={choseCrystal}
					/>
					<ComplexSelect
						backgroundIMG={paramIconSrc[selectedRuneBuff.name] || runeSlot}
						renederElement={{ element: selectedRuneBuff.buff }}
						onClick={choseRune}
					/>
				</div>
			</div>
		</Fragment>
	)
}

export default EquipParameters
