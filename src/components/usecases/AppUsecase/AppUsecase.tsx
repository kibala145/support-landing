import React, { useEffect, useState } from 'react'
import styles from './AppUsecase.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useBreakpoint } from '@/contexts/ViewportContext'

const AppUsecase: React.FC<Props> = ({ content, imgs, className = '' }) => {
  const { current } = useBreakpoint()
  let appUsecaseInner: React.ReactNode
  const [showSwiper, setShowSwiper] = useState(false)
  useEffect(() => {
    /* TODO: swiper fix */
    setTimeout(() => {
      setShowSwiper(true)
    }, 100)
  }, [])

  if (current === 'sm') {
    appUsecaseInner = showSwiper && (
      <Swiper
        slidesPerView={'auto'}
        freeMode={true}
        grabCursor={true}
        watchOverflow={true}
        className={styles.Polytech__slider}
      >
        {imgs.map((item, index) => (
          <SwiperSlide key={index} className={item.id}>
            <img src={item.content} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  } else {
    appUsecaseInner = (
      <div className="imagesWrapper">
        {imgs.map((item, index) => (
          <div key={index} className={`imageWrapper ${item.id}`}>
            <img src={item.content} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={`${styles.AppUsecase} ${className}`}>
      <div className={styles.AppUsecase__whatDid}>
        <span className={styles.AppUsecase__label}>Что делали:</span>
        <p dangerouslySetInnerHTML={{ __html: content.whatDid }} />
      </div>
      <div className={styles.AppUsecase__main}>
        {React.createElement(['sm', 'md'].includes(current) ? React.Fragment : 'div', {}, [
          <div key={0} className={styles.AppUsecase__goal}>
            <span className={styles.AppUsecase__label}>Задача:</span>
            <p dangerouslySetInnerHTML={{ __html: content.goal }} />
          </div>,
          <div key={1} className={styles.AppUsecase__result}>
            <span className={styles.AppUsecase__label}>Результат:</span>
            <p dangerouslySetInnerHTML={{ __html: content.result }} />
          </div>
        ])}
        <div className={styles.AppUsecase__solution}>
          <span className={styles.AppUsecase__label}>Решение:</span>
          <ul>
            {content.solution.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.AppUsecase__bottom}>{appUsecaseInner}</div>
    </div>
  )
}

export interface Props {
  content: Readonly<{
    whatDid: string
    goal: string
    result: string
    solution: ReadonlyArray<string>
  }>
  imgs: { content: string; id: string }[]
  className?: string
}

export default AppUsecase
