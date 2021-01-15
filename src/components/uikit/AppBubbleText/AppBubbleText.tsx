import React from 'react'
import styles from './AppBubbleText.module.scss'
import { ReactComponent as IconBubble } from '@/images/icons/bubble.svg'

const AppBubbleText: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.AppBubbleText} ${className}`}>
      <IconBubble />
      <span className={styles.AppBubbleText__text}>{children}</span>
    </div>
  )
}

interface Props {
  className?: string
}

export default AppBubbleText
