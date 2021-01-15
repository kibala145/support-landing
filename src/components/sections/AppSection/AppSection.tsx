import React from 'react'
import styles from './AppSection.module.scss'

const AppSection: React.FC<Props> = ({}) => (
  <div className={styles.AppSection}>
    <h1>AppSection component</h1>
  </div>
)

interface Props {}

export default AppSection
