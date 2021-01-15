import React from 'react'
import AppDialog from '../AppDialog/AppDialog'
import styles from './AppDialogUsecase.module.scss'
import { ReactComponent as IconArrowUp } from '@/images/icons/arrow_up.svg'

const AppDialogUsecase: React.FC<Props> = ({ children, onNext, onPrev, onClose }) => (
  <AppDialog className={styles.AppDialogUsecase} onClose={onClose}>
    {children}

    <nav className={styles.AppDialogUsecase__nav}>
      <button className={`${styles.AppDialogUsecase__button} ${styles.AppDialogUsecase__buttonPrev}`} onClick={onPrev}>
        <IconArrowUp />
        <span>Предыдущий кейс</span>
      </button>
      <button className={`${styles.AppDialogUsecase__button} ${styles.AppDialogUsecase__buttonNext}`} onClick={onNext}>
        <span>Следующий кейс</span>
        <IconArrowUp />
      </button>
    </nav>
  </AppDialog>
)

export interface Props {
  onPrev: React.MouseEventHandler
  onNext: React.MouseEventHandler
  onClose: React.MouseEventHandler
}

export default AppDialogUsecase
