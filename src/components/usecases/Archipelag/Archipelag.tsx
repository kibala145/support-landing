import React from 'react'
import AppUsecase, { Props } from '../AppUsecase/AppUsecase'
import styles from './Archipelag.module.scss'
import { getImages } from '../utils/getImages'

const imgs = getImages(require.context(`@/images/usecases/archipelag`, false, /.png$/))
const imgsPreview = getImages(require.context(`@/images/usecases/archipelag/preview`, false, /.png$/))

const imgsAdapted = imgs.map((item) => ({
  id: item.id,
  original: item.content,
  small: imgsPreview.find((i) => item.id === i.id)?.content ?? item.content
}))

const content: Props['content'] = {
  whatDid:
    'Помогали кандидатам стать участниками <a rel="noopener noreferrer" target="_blank" href="https://ai.leader-id.ru/">акселерационной программы</a>.',
  goal: 'Упростить процесс оплаты от&nbsp;физических и&nbsp;юридических лиц.',
  result: 'Собрали все оргвзносы за&nbsp;неделю.',
  solution: [
    'Написали виджет приема оплаты и&nbsp;интегрировали его с&nbsp;системой&nbsp;1С.',
    'Организовали обзвон участников с&nbsp;напоминанием об&nbsp;оплате.',
    'Еще пять агентов отправляли оригиналы документов и&nbsp;синхронизировали списки оплативших от&nbsp;юридического лица&nbsp;&mdash; в&nbsp;результате получили всего один запрос на&nbsp;возврат средств.'
  ]
} as const

const Archipelag: React.FC = ({}) => {
  return <AppUsecase imgs={imgsAdapted} content={content} className={styles.Archipelag} />
}

export default Archipelag
