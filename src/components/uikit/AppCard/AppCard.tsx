import React from 'react'
import styles from './AppCard.module.scss'

const AppCard: React.FC<Props> = ({ Icon, text }) => (
  <div className={styles.AppCard}>
    <span className={styles.AppCard__icon}>
      <Icon />
    </span>
    <span className={styles.AppCard__text} dangerouslySetInnerHTML={{ __html: text }} />
  </div>
)

export interface Props {
  Icon: React.FunctionComponent
  text: string
}

export default AppCard
