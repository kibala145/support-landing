import React, { MouseEventHandler } from 'react'
import styles from './AppDialog.module.scss'
import { ReactComponent as IconCross } from '@/images/icons/cross.svg'

const AppDialog: React.FC<Props> = ({ children, onClose }) => (
  <div className={styles.AppDialog}>
    <div className={styles.AppDialog__inner}>
      {children}
      <button className={styles.AppDialog__close} onClick={onClose}>
        <IconCross />
      </button>
    </div>
  </div>
)

interface Props {
  onClose?: MouseEventHandler
}

export default AppDialog
