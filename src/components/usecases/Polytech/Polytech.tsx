import React from 'react'
import styles from './Polytech.module.scss'
import AppUsecase, { Props } from '@/components/usecases/AppUsecase/AppUsecase'
import 'swiper/swiper.scss'
import { getImages } from '../utils/getImages'

const imgs = getImages(require.context(`@/images/usecases/polytech`, false, /.png$/))

const content: Props['content'] = {
  whatDid: 'Помогали абитуриентам во время поступления на международную магистерскую программу.',
  goal: 'Увеличить долю абитуриентов, которые захотят поступать на платные места после завершения конкурса.',
  result: 'Увеличили конкурс на место в 20 раз.',
  solution: [
    'Выбрали английский язык для общения с участниками, так как среди абитуриентов были иностранцы.',
    'Несколько раз в неделю отправляли участникам полезные рассылки с советами, как повысить шансы на поступление.',
    'Сделали серию статей с теми, кто уже учится на программе, чтобы абитуриенты увидели ее изнутри.',
    'Завели канал в Телеграме, чтобы участники обменивались опытом.'
  ]
} as const

const Polytech: React.FC = () => {
  return <AppUsecase content={content} imgs={imgs} className={styles.Polytech}></AppUsecase>
}

export default Polytech
