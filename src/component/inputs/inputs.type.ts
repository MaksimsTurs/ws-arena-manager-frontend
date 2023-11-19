import { FieldValues, Path, UseFormRegister } from "react-hook-form"

export type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>
  inputName: Path<T>
  inputLabel: string
}