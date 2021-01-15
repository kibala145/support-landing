import AppBubbleText from '@/components/uikit/AppBubbleText/AppBubbleText'
import AppContainer from '@/components/AppContainer/AppContainer'
import AppCardAction from '@/components/uikit/AppCardAction/AppCardAction'
import React from 'react'
import styles from './SectionHowWeWork.module.scss'

const cards = [
  {
    title: 'Станем поддержкой на аутсорсе',
    description:
      'Подключим системы сбора и обработки тикетов, предоставим агентов, настроим автоматические системы мониторинга, подсоединимся к вашим корпоративным системам.'
  },
  {
    title: 'Запустим службу поддержки с нуля',
    description: 'Поможем с концепцией, посчитаем бюджет, подберем и обучим персонал.'
  },
  {
    title: 'Поможем повысить эффективность действующей поддержки',
    description:
      'Изучим ваши показатели и предложим методы, которые не потребуют больших расходов, но значительно улучшат качество работы с клиентами.'
  }
] as const

const SectionHowWeWork: React.FC<Props> = ({ className = '' }) => (
  <AppContainer className={`${styles.SectionHowWeWork} ${className}`}>
    <div className={styles.SectionHowWeWork__AppBubbleTextWrapper}>
      <AppBubbleText className={styles.SectionHowWeWork__AppBubbleText}>Как мы работаем</AppBubbleText>
    </div>
    <div className={styles.SectionHowWeWork__cards}>
      {cards.map((card, index) => (
        <AppCardAction
          reverse={Boolean(index % 2)}
          className={styles.SectionHowWeWork__AppCardAction}
          key={index}
          {...card}
        />
      ))}
    </div>
  </AppContainer>
)

interface Props {
  className?: string
}

export default SectionHowWeWork
