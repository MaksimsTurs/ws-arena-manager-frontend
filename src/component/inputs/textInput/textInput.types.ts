import { FieldValues } from "react-hook-form"
import { InputProps } from "../inputs.type"

export type TextInputProps<T extends FieldValues> = {
  type: 'text' | 'number'
  max?: number
  placeholder?: string
  defaultValue?: any
  validation?: (value: string) => undefined | string 
} & Pick<InputProps<T>, 'inputLabel' | 'inputName' | 'register'>