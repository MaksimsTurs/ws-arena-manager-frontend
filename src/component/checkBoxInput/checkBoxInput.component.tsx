import style from './checkBoxInput.module.scss'
import { CheckBoxInputProps } from './checkBoxInput.types'

/**
 * @param inputID used to bind label with input and for label Text
 */

const CheckBoxInput = ({ inputID }: CheckBoxInputProps) => {
	return (
		<div className={style.checkbox_label_container}>
      <span className={style.checkbox_label_custom_input}></span>
			<input className={style.checkbox_label_input} id={inputID} name={inputID} type='checkbox' />
			<label className={style.checkbox_label} htmlFor={inputID}>{inputID}</label>
		</div>
	)
}

export default CheckBoxInput
