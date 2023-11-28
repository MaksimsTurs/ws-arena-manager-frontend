import scss from './selectInput.module.scss'

import { useEffect, useRef, useState } from 'react'

import { SelectInputProps } from './selectInput.type'
import { GameClasses } from '@/types/class.type'

const SelectInput = <T extends Omit<GameClasses, 'classPlayebelRoles' | 'fractionBonuses' | 'enableEquipType'>
>({
	options,
	selectedOption,
	setOption,
	placeholder,
}: SelectInputProps<T>) => {
	const [isDropDownVisible, setDropDownVisible] = useState<boolean>(false)

	const dropdownButtonRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const outsideClickHandler = (event: MouseEvent) => {
			if (event.target === dropdownButtonRef.current) {
				setDropDownVisible(true)
			} else {
				setDropDownVisible(false)
			}
		}

		document.addEventListener('click', outsideClickHandler)

		return () => {
			document.removeEventListener('click', outsideClickHandler)
		}
	}, [])

	return (
		<div className={scss.select_container} ref={dropdownButtonRef}>
			<p className={selectedOption ? scss.select_title : scss.select_placeholder}>{selectedOption?.className || placeholder}</p>
			{selectedOption && <img className={scss.select_icon} src={selectedOption?.classIcon} />} 
			<div
				className={isDropDownVisible ? scss.select_dropdown : `${scss.select_dropdown} ${scss.select_hidden}`}
				style={{ height: `(${options?.length} * 3px)`, overflow: 'auto' }}>
				{options?.map(option => (
					<div
						key={option?.className}
						onClick={() => setOption(option)}
						className={scss.select_option}>
						<p>{option?.className}</p>
						<img src={option?.classIcon} alt={option?.className} />
					</div>
				))}
			</div>
		</div>
	)
}

export default SelectInput
