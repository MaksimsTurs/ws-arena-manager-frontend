import style from './selectInput.module.scss'

import { useEffect, useRef, useState } from 'react'

import { SelectInputProps } from './selectInput.type'
import { GameClasses } from '@/types/class.type'

const SelectInput = <
	T extends Omit<
		GameClasses,
		'classPlayebelRoles' | 'fractionBonuses' | 'enableEquipType'
	>
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
		<div className={style.select_container} ref={dropdownButtonRef}>
			<p className={selectedOption ? style.select_title : style.select_placeholder}>{selectedOption?.className || placeholder}</p>
			{selectedOption && <img className={style.select_icon} src={selectedOption?.classIcon} />} 
			<div
				className={
					isDropDownVisible
						? style.select_dropdown
						: `${style.select_dropdown} ${style.select_hidden}`
				}
				style={{ height: `(${options?.length} * 3px)`, overflow: 'auto' }}>
				{options?.map(option => (
					<div
						key={option?.className}
						onClick={() => setOption(option)}
						className={style.select_option}>
						<p>{option?.className}</p>
						<img src={option?.classIcon} alt={option?.className} />
					</div>
				))}
			</div>
		</div>
	)
}

export default SelectInput
