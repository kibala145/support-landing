import React from 'react'
import AppContainer from '../../AppContainer/AppContainer'
import styles from './SectionMain.module.scss'

const SectionMain: React.FC<Props> = ({ className = '' }) => {
  const goToOrder: React.MouseEventHandler = (e) => {
    e.preventDefault()
    document.getElementById('formOrder')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <AppContainer className={`${styles.SectionMain} ${className}`}>
      <h1 className={styles.SectionMain__headline}>
        <b>Круглосуточная</b> <i>поддержка проектов и мероприятий</i>
      </h1>
      <a className={styles.SectionMain__a} href="#" onClick={goToOrder}>
        Заказать
      </a>
    </AppContainer>
  )
}

interface Props {
  className?: string
}

export default SectionMain
