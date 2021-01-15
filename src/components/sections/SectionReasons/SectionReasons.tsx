import React from 'react'
import styles from './SectionReasons.module.scss'
import AppContainer from '@/components/AppContainer/AppContainer'
import AppBubbleText from '@/components/uikit/AppBubbleText/AppBubbleText'
import SectionReasonsItem from './SectionReasonsItem/SectionReasonsItem'

interface IReason {
  title: string
  text: string
}

const items: IReason[] = [
  {
    title: 'Работаем круглосуточно',
    text:
      'Мы&nbsp;помогаем пользователям, когда им&nbsp;это необходимо, в&nbsp;каком&nbsp;бы часовом поясе они ни&nbsp;находились.'
  },
  {
    title: 'Отточили механизмы работы',
    text:
      'У&nbsp;нас есть готовая инфраструктура для обработки обращений и&nbsp;собственные механизмы сбора обратной связи от&nbsp;клиентов. Быстро подключаемся к&nbsp;любым системам.'
  },
  {
    title: 'Даем больше, чем просто сервис ассистентов',
    text:
      'Помогаем не&nbsp;только удержать клиентов, но&nbsp;и&nbsp;сделать это выгодно: найти оптимальное количество агентов поддержки и&nbsp;бесплатные решения.'
  },
  {
    title: 'Ценим объективность и&nbsp;прозрачность',
    text:
      'Настраиваем дашборды, которые в&nbsp;режиме реального времени показывают, сколько задач в&nbsp;работе у&nbsp;поддержки, сколько пользователей обратились к&nbsp;боту и&nbsp;сколько получили решения.'
  },
  {
    title: 'Следим за&nbsp;безопасностью',
    text: 'Со&nbsp;всеми агентами заключаем NDA.'
  },
  {
    title: 'Всегда говорим &laquo;Да!&raquo;',
    text: 'Не&nbsp;отказываем клиентам, кроме случаев, когда нас принуждают нарушить закон 😊'
  }
]

const SectionReasons: React.FC<Props> = ({ className = '' }) => (
  <AppContainer className={`${styles.SectionReasons} ${className}`}>
    <AppBubbleText className={styles.SectionReasons__AppBubbleText}>6 причин выбрать нас</AppBubbleText>
    <div className={styles.SectionReasons__main}>
      {items.map((item, index) => (
        <SectionReasonsItem key={index} {...item} order={index + 1} />
      ))}
    </div>
  </AppContainer>
)

export interface Props {
  className?: string
}

export default SectionReasons
