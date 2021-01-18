import React from 'react'
import styles from './Polytech.module.scss'
import AppUsecase, { Props } from '@/components/usecases/AppUsecase/AppUsecase'
import 'swiper/swiper.scss'
import { getImages } from '../utils/getImages'

const imgs = getImages(require.context(`@/images/usecases/polytech`, false, /.png$/))
const imgsPreview = getImages(require.context(`@/images/usecases/polytech/preview`, false, /.png$/))

const imgsAdapted = imgs.map((item) => ({
  id: item.id,
  original: item.content,
  small: imgsPreview.find((i) => item.id === i.id)?.content ?? item.content
}))

const content: Props['content'] = {
  whatDid:
    'Помогали абитуриентам во время поступления на <a rel="noopener noreferrer" target="_blank" href="https://iamt.2035.dev/">международную магистерскую программу.</a>',
  goal: 'Увеличить долю абитуриентов, которые захотят поступать на платные места после завершения конкурса.',
  result: 'Увеличили конкурс на место в 20 раз.',
  solution: [
    'Выбрали английский язык для общения с участниками, так как среди абитуриентов были иностранцы.',
    'Несколько раз в неделю отправляли участникам полезные рассылки с советами, как повысить шансы на поступление.',
    'Сделали <a rel="noopener noreferrer" target="_blank" href="https://medium.com/@leader_id">серию статей</a> с теми, кто уже учится на программе, чтобы абитуриенты увидели ее изнутри.',
    'Завели <a rel="noopener noreferrer" target="_blank" href="https://t.me/iamt2035">канал в Телеграме</a>, чтобы участники обменивались опытом.'
  ]
} as const

const Polytech: React.FC = () => {
  return <AppUsecase content={content} imgs={imgsAdapted} className={styles.Polytech} />
}

export default Polytech
