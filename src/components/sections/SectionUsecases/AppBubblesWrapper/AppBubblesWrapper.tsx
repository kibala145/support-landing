import AppBubble from '@/components/uikit/AppBubble/AppBubble'
import { IContext, ModalId, UsecasesModalContext } from '@/contexts/UsecasesModalContext'
import { useBreakpoint } from '@/contexts/ViewportContext'
import React, { useState } from 'react'
import styles from './AppBubblesWrapper.module.scss'

const bubbles: { id: ModalId; text: string }[] = [
  {
    id: 'ostrov',
    text: 'Образовательный интенсив Остров 10-21'
  },
  {
    id: 'polytech',
    text: 'Открытый отбор в магистратуру Политеха'
  },
  {
    id: 'platform',
    text: 'Платформа НТИ'
  },
  {
    id: 'archipelag',
    text: 'Интенсив по искусственному интеллекту Архипелаг 20.35'
  },
  {
    id: 'leader',
    text: 'Платформа для организаторов бесплатных мероприятий Leader-ID'
  }
]

const AppBubblesWrapper: React.FC<Props> = ({}) => {
  const { setModal } = React.useContext(UsecasesModalContext) as IContext
  const { current, md } = useBreakpoint()
  const [active, setActive] = useState(current === 'sm' ? 'archipelag' : '')

  const onMouseEnter = (id: string, e: React.MouseEvent) => {
    if (!md) return
    setActive(id)
    e.stopPropagation()
  }

  return (
    <div className={styles.AppBubblesWrapper}>
      {bubbles.map((item, index) => (
        <AppBubble
          key={index}
          onClick={(e: React.MouseEvent) => (item.id === active ? setModal(item.id, e) : setActive(item.id))}
          className={`${styles['AppBubblesWrapper__' + item.id]} ${styles.AppBubblesWrapper__AppBubble}`}
          isActive={active === item.id}
          onMouseEnter={(e) => onMouseEnter(item.id, e)}
        >
          {item.text}
        </AppBubble>
      ))}
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

export default AppBubblesWrapper
