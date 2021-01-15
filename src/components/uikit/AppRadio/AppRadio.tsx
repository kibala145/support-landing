import React from 'react'
import styles from './AppRadio.module.scss'
import AppRadioOption from './AppRadioOption/AppRadioOption'

const AppRadio: React.FC<Props> = ({ options, className = '', value = null, onChange, disabled }) => {
  return (
    <div className={`${styles.AppRadio} ${className}`}>
      {options.map(({ label, id }) => (
        <AppRadioOption key={id} id={id} checked={value === id} onChange={onChange} disabled={disabled}>
          {label}
        </AppRadioOption>
      ))}
    </div>
  )
}

interface AppRadioOption {
  id: React.ReactText
  label: string
}

export interface Props {
  className?: string
  options: AppRadioOption[]
  value?: React.ReactText | null
  onChange: (v: React.ReactText | null) => void
  disabled?: boolean
}

export default AppRadio
