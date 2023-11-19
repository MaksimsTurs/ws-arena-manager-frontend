import style from './checkboxContainer.module.scss'

import { CheckboxContainerProps } from './checkboxContainer.type'
import { PropsWithChildren } from 'react'

const CheckboxContainer = ({ children, labelText }: PropsWithChildren<CheckboxContainerProps>) => {
  return(
    <div className={style.checkbox_container}>
    <p className={style.checkbox_label_text}>{labelText}</p>
    <div className={style.checkbox_body}>
      {children}
    </div>
  </div>
  )
}

export default CheckboxContainer