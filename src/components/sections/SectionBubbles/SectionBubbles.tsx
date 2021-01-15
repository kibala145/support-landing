import AppBubbleText from '@/components/uikit/AppBubbleText/AppBubbleText'
import React from 'react'
import AppContainer from '../../AppContainer/AppContainer'
import styles from './SectionBubbles.module.scss'

const bubbles: readonly { id: string; text: string; props?: { circleSize?: number; fontSize?: number } }[] = [
  {
    id: 'satisfaction',
    text: 'Как посчитать уровень удовлетворенности клиентов?'
  },
  {
    id: 'callCenter',
    text: 'Как подключить колл-центр?',
    props: {
      circleSize: 23.4,
      fontSize: 1.6
    }
  },
  {
    id: 'sms',
    text: 'Как настроить отправку СМС?',
    props: {
      circleSize: 23.4,
      fontSize: 1.6
    }
  },
  {
    id: 'letterCount',
    text: 'Сколько человек перешли по ссылкам из письма?'
  },
  {
    id: 'letterSend',
    text: 'Как настроить автоматическую отправку 1000 писем?',
    props: {
      circleSize: 25.6,
      fontSize: 1.6
    }
  },
  {
    id: 'faq',
    text: 'Как собрать FAQ?',
    props: {
      circleSize: 21.2,
      fontSize: 1.6
    }
  }
] as const

const SectionBubbles: React.FC<Props> = ({ className = '' }) => (
  <AppContainer className={`${styles.SectionBubbles} ${className}`}>
    {bubbles.map(({ text, props }, index) => (
      <AppBubbleText key={index} {...(props ?? {})} className={`${styles.SectionBubbles__AppBubbleText}`}>
        {text}
      </AppBubbleText>
    ))}
    {/* <AppBubbleText></AppBubbleText>
    <AppBubbleText circleSize={23.4} fontSize={1.6}>
      Как подключить колл-центр?
    </AppBubbleText>
    <AppBubbleText circleSize={23.4} fontSize={1.6}>
      Как настроить отправку СМС?
    </AppBubbleText> */}
  </AppContainer>
)

export interface Props {
  className?: string
}

export default SectionBubbles
