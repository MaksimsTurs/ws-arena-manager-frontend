import style from './textInput.module.scss'

import { TextInputProps } from './textInput.types'

const TextInput = <T extends Record<any, any>>({
	placeholder,
	max,
	type,
	inputLabel,
	inputName,
	defaultValue,
	register,
	validation,
}: TextInputProps<T>) => {
	return (
		<div className={style.input_container}>
			<label className={style.input_label_text} htmlFor={inputLabel}>
				{inputLabel}
			</label>
			<input
				className={style.input_container_input}
				autoComplete='off'
				id={inputLabel}
				type={type}
				max={max}
				placeholder={placeholder}
				defaultValue={defaultValue ? defaultValue : type === 'number' ? 34 : undefined}
				spellCheck={false}
				min={0}
				{...register(inputName, {
					validate: validation,
				})}
			/>
		</div>
	)
}

export default TextInput
