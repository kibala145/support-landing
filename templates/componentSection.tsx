import React from 'react'
import styles from './TemplateName.module.scss'
import AppContainer from '@/components/AppContainer/AppContainer'

const TemplateName: React.FC<Props> = ({ className = '' }) => (
  <AppContainer className={`${styles.TemplateName} ${className}`}>
    <h1>TemplateName component</h1>
  </AppContainer>
)

export interface Props {
  className?: string
}

export default TemplateName
