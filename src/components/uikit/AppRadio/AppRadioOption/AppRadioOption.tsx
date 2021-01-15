import React from 'react'
import styles from './AppRadioOption.module.scss'

const AppRadioOption: React.FC<Props> = ({ id, children, checked, onChange, disabled }) => {
  return (
    <label className={`${styles.AppRadioOption} ${checked ? styles['AppRadioOption--checked'] : ''}`}>
      <input type="radio" value={id} checked={checked} onChange={() => onChange(id)} disabled={disabled} />
      <span>{children}</span>
    </label>
  )
}

export interface Props {
  id: React.ReactText
  checked: boolean
  onChange: (v: React.ReactText) => void
  disabled?: boolean
}

export default AppRadioOption
