import React from 'react'
import styles from './AppCardAction.module.scss'

const AppCardAction: React.FC<Props> = ({ title, description, className = '', reverse = false }) => (
  <div className={`${styles.AppCardAction} ${className} ${reverse ? styles.reverse : ''}`}>
    <div className={styles.AppCardAction__header}>
      <div className={styles.AppCardAction__title}>{title}</div>
    </div>
    <div className={styles.AppCardAction__body}>
      <div className={styles.AppCardAction__description}>{description}</div>
    </div>
  </div>
)

export interface Props {
  title: string
  description: string
  className?: string
  reverse?: boolean
}

export default AppCardAction
