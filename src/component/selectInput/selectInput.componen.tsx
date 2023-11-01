import style from './selectInput.module.scss'

import { useEffect, useRef, useState } from 'react'

import { SelectInputProps } from './selectInput.type'
import { GameClasses } from '@/managerWindow/tab/addPlayer/data/data.type'

/**
 * @param inputID used to bind label with input and for label Text
 */

const SelectInput = <T extends Omit<GameClasses, 'roles'>>({
	inputID,
	options,
	selectedOption,
	setOption,
	height,
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

	let selectedOptionIMG: string = ''

	for (let index = 0; index < options.length; index++) {
		if (options[index].title === selectedOption.title) {
			selectedOptionIMG = options[index].src
		} else {
			continue
		}
	}

	return (
		<div>
			<p className={style.select_title}>{inputID}</p>
			<div ref={dropdownButtonRef} className={style.select_container}>
				<p>{selectedOption.title}</p>
				<img src={selectedOptionIMG} />
				<div
					className={
						isDropDownVisible
							? style.select_custom_dropdown
							: `${style.select_custom_dropdown} ${style.select_hidden}`
					}
					style={
						height
							? { height }
							: { height: `(${options.length} * 3px)`, overflow: 'auto' }
					}
				>
					{options.map((option) => (
						<div
							key={option.title}
							onClick={() => setOption(option)}
							className={style.select_option}
						>
							<p>{option.title}</p>
							<img src={option.src} alt={option.title} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default SelectInput
