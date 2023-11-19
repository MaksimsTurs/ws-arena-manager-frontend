import { FieldValues } from 'react-hook-form'
import { InputProps } from '../inputs.type'

export type CheckBoxInputProps<T extends FieldValues> = {
	defaultValue?: boolean
} & Pick<InputProps<T>, 'inputLabel' | 'inputName' | 'register'>
