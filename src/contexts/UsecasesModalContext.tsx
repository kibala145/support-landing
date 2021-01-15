import React, { useRef, useState } from 'react'
import { animated, useTransition, useChain, config } from 'react-spring'

import AppDialogUsecase from '@/components/AppDialogUsecase/AppDialogUsecase'

import Platform from '@/components/usecases/Platform/Platform'
import Polytech from '@/components/usecases/Polytech/Polytech'
import Ostrov from '@/components/usecases/Ostrov/Ostrov'
import Leader from '@/components/usecases/Leader/Leader'
import Archipelag from '@/components/usecases/Archipelag/Archipelag'

const modals = ['polytech', 'platform', 'ostrov', 'leader', 'archipelag'] as const

export type ModalId = typeof modals[number]

export interface IContext {
  current: number
  modals: typeof modals
  setModal: (modal: ModalId | null, e: React.MouseEvent) => void
  next: () => void
  prev: () => void
}

export const UsecasesModalContext = React.createContext<IContext | null>(null)

const modalComponents: Record<ModalId, React.ReactNode> = {
  polytech: <Polytech />,
  platform: <Platform />,
  ostrov: <Ostrov />,
  leader: <Leader />,
  archipelag: <Archipelag />
} as const

const getModalComponent = (id: ModalId) => modalComponents[id]

export const UsecasesModalProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [current, setCurrent] = useState(-1)
  const [currentPrev, setCurrentPrev] = useState(-1)

  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const clipPathStyle = (position: { x: number; y: number }, isEnter = false) =>
    `circle(${isEnter ? 200 : 0}% at ${position.x}% ${position.y}%)`

  const modalRef = useRef(null)
  const modalTransition = useTransition(current !== -1, null, {
    ref: modalRef,
    from: {
      clipPath: clipPathStyle(circlePosition)
    },
    enter: {
      clipPath: clipPathStyle(circlePosition, true)
    },
    leave: {
      clipPath: clipPathStyle(circlePosition)
    },
    unique: true
  })

  const isEmpty = current === -1 || currentPrev === -1

  const usecaseRef = useRef(null)
  const usecaseTransition = useTransition(current, null, {
    ref: usecaseRef,
    from: () => {
      return {
        transform: `translateX(${(isEmpty ? 0 : current - currentPrev) * 100}%) scale(0.3)`,
        position: isEmpty ? 'relative' : 'absolute',
        opacity: 0
      }
    },

    enter: {
      transform: 'translateX(0%) scale(1)',
      position: 'relative',
      opacity: 1
    },

    leave: () => {
      return {
        transform: `translateX(${(isEmpty ? 0 : currentPrev - current) * 100}%) scale(0.3)`,
        position: isEmpty ? 'relative' : 'absolute',
        opacity: 0
      }
    },
    config: {
      ...config.stiff,
      tension: 330
    }
  })

  const setModal: IContext['setModal'] = (id, { clientX: x, clientY: y }) => {
    const { innerWidth, innerHeight } = window
    const circleX = (x / innerWidth) * 100
    const circleY = (y / innerHeight) * 100
    const circlePosition = {
      x: circleX,
      y: circleY
    }
    setCirclePosition(circlePosition)
    setCurrentPrev(current)
    const index = id ? modals.indexOf(id) : -1
    setCurrent(index)
  }

  const next: IContext['next'] = () => {
    setCurrentPrev(current)
    if (current === -1) return

    setCurrent(current === modals.length - 1 ? 0 : current + 1)
  }

  const prev: IContext['prev'] = () => {
    setCurrentPrev(current)
    if (current === -1) return

    setCurrent(current === 0 ? modals.length - 1 : current - 1)
  }

  useChain(current !== -1 ? [modalRef, usecaseRef] : [usecaseRef, modalRef], [0, 0.1])

  return (
    <UsecasesModalContext.Provider value={{ current, modals, setModal, next, prev }}>
      {children}
      {modalTransition.map(
        ({ item, props, key }) =>
          item && (
            <animated.div
              key={key}
              style={{ ...props, position: 'fixed', zIndex: 10, top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <AppDialogUsecase onClose={(e: React.MouseEvent) => setModal(null, e)} onNext={next} onPrev={prev}>
                {usecaseTransition.map(
                  ({ item: usecaseItem, key: useCaseKey, props: usecaseProps }) =>
                    usecaseItem !== -1 && (
                      <animated.div key={useCaseKey} style={usecaseProps}>
                        {getModalComponent(modals[usecaseItem])}
                      </animated.div>
                    )
                )}
              </AppDialogUsecase>
            </animated.div>
          )
      )}
    </UsecasesModalContext.Provider>
  )
}
