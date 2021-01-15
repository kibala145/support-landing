import AppContainer from '@/components/AppContainer/AppContainer'
import useComponentSize from '@rehooks/component-size'
import React, { useRef, useState } from 'react'
import { useSpring, useTransition, animated } from 'react-spring'
import styles from './SectionAccordion.module.scss'
import { ReactComponent as IconArrowUp } from '@/images/icons/arrow_up.svg'
import AppCard from '@/components/uikit/AppCard/AppCard'

const SectionAccordion: React.FC<Props> = ({ className = '', title, description, cards }) => {
  const [isActive, setIsActive] = useState(true)
  const ref = useRef(null)
  const { height } = useComponentSize(ref)
  const transitions = useTransition(isActive, null, {
    /* from: {
      height: 0
    },
    enter: {
      height
    }, */
    leave: {
      height: 0
    },
    update: {
      height
    },
    unique: true
  })
  const arrowRotate = useSpring({
    transform: `scaleY(${isActive ? 1 : -1})`
  })

  return (
    <AppContainer className={`${styles.SectionAccordion} ${className}`}>
      <h2 className={styles.SectionAccordion__headline}>{title}</h2>
      <p className={styles.SectionAccordion__description} dangerouslySetInnerHTML={{ __html: description }} />
      <button className={styles.SectionAccordion__button} onClick={() => setIsActive(!isActive)}>
        Другие функции
        <animated.span style={arrowRotate}>
          <IconArrowUp />
        </animated.span>
      </button>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={{ ...props, overflow: 'hidden', position: 'relative' }}>
              <div ref={ref} className={styles.SectionAccordion__inner}>
                {cards.map((card, index) => (
                  <AppCard key={index} {...card} />
                ))}
              </div>
            </animated.div>
          )
      )}
    </AppContainer>
  )
}

export interface Props {
  className?: string
  title: React.ReactNode
  description: string
  cards: ReadonlyArray<{
    Icon: React.FunctionComponent
    text: string
  }>
}

export default SectionAccordion
