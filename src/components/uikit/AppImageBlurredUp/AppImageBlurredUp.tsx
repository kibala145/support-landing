import useProgressiveImg from '@/hooks/useProgressiveImg'
import React from 'react'
import styles from './AppImageBlurredUp.module.scss'

const AppImageBlurredUp: React.FC<Props> = ({ original, small, className }) => {
  const [src, { blur }] = useProgressiveImg(small, original)
  return (
    <img
      className={`${styles.AppImageBlurredUp} ${className} ${blur ? styles['AppImageBlurredUp--loading'] : ''}`}
      src={src}
    />
  )
}

export interface Props {
  original: string
  small: string
  className?: string
}

export default AppImageBlurredUp
