import React from 'react'
import styles from './AppContainer.module.scss'

const AppContainer: React.FC<Props> = ({ children, className = '', id = '' }) => (
  <div id={id} className={`${styles.AppContainer} ${className}`}>
    <div className={styles.AppContainer__inner}>{children}</div>
  </div>
)

interface Props {
  className?: string
  id?: string
}

export default AppContainer
