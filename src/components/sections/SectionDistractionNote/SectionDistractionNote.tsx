import React from 'react'
import styles from './SectionDistractionNote.module.scss'
import AppContainer from '@/components/AppContainer/AppContainer'

const SectionDistractionNote: React.FC<Props> = ({ className = '' }) => (
  <AppContainer className={`${styles.SectionDistractionNote} ${className}`}>
    <p>
      Если эти вопросы отвлекают вас от важных задач — <b>оставьте решение нам.</b> Возьмем на себя заботу
      о пользователях и освободим ваше время.
    </p>
  </AppContainer>
)

export interface Props {
  className?: string
}

export default SectionDistractionNote
