import { useBreakpoint } from '@/contexts/ViewportContext'
import React from 'react'
import styles from './AppBubble.module.scss'
import { ReactComponent as IconArrowUp } from '@/images/icons/arrow_up.svg'

const AppBubble: React.FC<Props> = ({
  children,
  onClick,
  className = '',
  isActive = false,
  onMouseEnter,
  onMouseLeave
}) => {
  const { md } = useBreakpoint()

  return (
    <div
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      className={`${styles.AppBubble} ${className} ${isActive ? 'active' : ''}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {!md && (
        <div className={styles.AppBubble__toggleActive}>
          <IconArrowUp />
          <span>Нажмите, чтобы посмотреть кейс</span>
        </div>
      )}
      <span className={styles.AppBubble__text}>{children}</span>
    </div>
  )
}

export interface Props {
  className?: string
  colorHover?: string
  size?: number | string
  onClick?: React.MouseEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
  isActive?: boolean
}

export default AppBubble
