import React, { MouseEventHandler, useEffect } from 'react'
import styles from './AppDialog.module.scss'
import { ReactComponent as IconCross } from '@/images/icons/cross.svg'

const AppDialog: React.FC<Props> = ({ children, onClose, className = '' }) => {
  useEffect(() => {
    const cleanup = () => {
      document.body.style.overflow = ''
    }
    document.body.style.overflow = 'hidden'
    return cleanup
  }, [])

  return (
    <div className={`${styles.AppDialog} ${className}`}>
      <div className={styles.AppDialog__inner}>
        {children}
        <button className={styles.AppDialog__close} onClick={onClose}>
          <IconCross />
        </button>
      </div>
    </div>
  )
}

interface Props {
  onClose?: MouseEventHandler
  className?: string
}

export default AppDialog
