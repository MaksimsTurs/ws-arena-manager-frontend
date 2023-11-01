import style from './textInput.module.scss'
import { TextInputProps } from './textInput.types'

/**
 * @param inputID used to bind label with input and for label Text
 */

const TextInput = ({
	placeholder,
	max,
	type,
	inputID,
}: TextInputProps) => {
	return (
		<div className={style.input_label_container}>
			<label className={style.input_label_text} htmlFor={inputID}>
				{inputID}
			</label>
			<input
				className={style.label_input}
				id={inputID}
				name={inputID}
				type={type}
				max={max}
				placeholder={placeholder}
				spellCheck={false}
				min={0}
			/>
		</div>
	)
}

export default TextInput
