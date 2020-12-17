import React, { MouseEventHandler, useState } from 'react'
import logo from './logo.svg'
import { animated, useTransition } from 'react-spring'
import AppDialog from './components/AppDialog/AppDialog'
import Polytech from './components/usecases/Polytech/Polytech'

function App() {
  const clipPathStyle = (position: { x: number; y: number }, isEnter = false) =>
    `circle(${isEnter ? 200 : 0}% at ${position.x}% ${position.y}%)`

  const [isActive, setIsActive] = useState(false)
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 })
  const transitions = useTransition(isActive, null, {
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

  const toggleDialog: MouseEventHandler = ({ clientX: x, clientY: y }) => {
    const { x: targetX, y: targetY, width, height } = document.body.getBoundingClientRect()
    const circleX = ((x - targetX) / width) * 100
    const circleY = ((y - targetY) / height) * 100
    const circlePosition = {
      x: circleX,
      y: circleY
    }
    setCirclePosition(circlePosition)
    setIsActive(!isActive)
  }

  return (
    <div>
      <div style={{ cursor: 'pointer', width: '40vmin' }} onClick={toggleDialog}>
        <img style={{ width: '100%' }} src={logo} alt="logo" />
      </div>
      <p>Освободить фронт-офисные службы от рутины.</p>
      {transitions.map(
        ({ item, key, props, state }) =>
          item && (
            <animated.div key={key} style={{ ...props, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              <AppDialog onClose={state === 'leave' ? undefined : toggleDialog}>
                <Polytech />
              </AppDialog>
            </animated.div>
          )
      )}
    </div>
  )
}

export default App
