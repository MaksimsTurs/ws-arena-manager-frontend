import { useEffect, useRef, useState } from 'react'
import style from './selectInput.module.scss'
import { SelectInputProps } from './selectInput.type'

/**
 * @param inputID used to bind label with input and for label Text
 */

const SelectInput = ({
	inputID,
	options,
	selectedOption,
	setSelection,
	height,
}: SelectInputProps) => {
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
	}, [])

	let selectedClassIMG: string = ''

	for (let index = 0; index < options.length; index++) {
		if (options[index].title === selectedOption.title) {
			selectedClassIMG = options[index].src
		} else {
			continue
		}
	}

	return (
		<div className={style.select_container}>
			<p className={style.select_title}>{inputID}</p>
			<div className={style.select_custom_select_container}>
				<div
					className={style.select_selected_class_container}
					ref={dropdownButtonRef}
				>
					<p>{selectedOption.title}</p>
					<img src={selectedClassIMG} />
					<div
						style={{ height: height ? height : `calc(${options.length} * 3)`}}
						className={
							isDropDownVisible
								? style.select_custom_dropdown
								: `${style.select_custom_dropdown} ${style.select_hidden}`
						}
					>
						{options.map((option) => (
							<div
								key={option.title}
								onClick={() => setSelection(option)}
								className={style.select_option}
							>
								<p>{option.title}</p>
								<img src={option.src} alt={option.title} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SelectInput
