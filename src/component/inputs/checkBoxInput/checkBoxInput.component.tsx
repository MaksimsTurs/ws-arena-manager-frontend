import style from './checkBoxInput.module.scss'

import { CheckBoxInputProps } from './checkBoxInput.types'

const CheckBoxInput = <T extends Record<any, any>>({
	inputName,
	inputLabel,
	defaultValue,
	register
}: CheckBoxInputProps<T>) => {
  return (
		<div className={style.checkbox_label_container}>
			<span className={style.checkbox_label_custom_input}></span>
			<input
				className={style.checkbox_label_input}
				type='checkbox'
				defaultChecked={defaultValue}
				id={inputLabel}
				{...register(inputName)}
			/>
			<label className={style.checkbox_label} htmlFor={inputLabel}>
				{inputLabel}
			</label>
		</div>
	)
}

export default CheckBoxInput
