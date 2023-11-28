import scss from './checkboxContainer.module.scss'

import { CheckboxContainerProps } from './checkboxContainer.type'
import { PropsWithChildren } from 'react'

const CheckboxContainer = ({ children, labelText }: PropsWithChildren<CheckboxContainerProps>) => {
  return(
    <div className={scss.checkbox_container}>
    <p className={scss.checkbox_label_text}>{labelText}</p>
    <div className={scss.checkbox_body}>
      {children}
    </div>
  </div>
  )
}

export default CheckboxContainer