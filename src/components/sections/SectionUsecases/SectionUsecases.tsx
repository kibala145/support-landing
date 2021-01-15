import React from 'react'
import styles from './SectionUsecases.module.scss'
import AppContainer from '@/components/AppContainer/AppContainer'
import AppBubbleText from '@/components/uikit/AppBubbleText/AppBubbleText'
import AppBubblesWrapper from './AppBubblesWrapper/AppBubblesWrapper'

const SectionUsecases: React.FC<Props> = ({ className = '' }) => {
  return (
    <AppContainer className={`${styles.SectionUsecases} ${className}`}>
      <AppBubbleText className={styles.SectionUsecases__AppBubbleText}>Какие кейсы мы решали</AppBubbleText>
      <AppBubblesWrapper />
    </AppContainer>
  )
}

export interface Props {
  className?: string
}

export default SectionUsecases
