import React from 'react'
import AppUsecase, { Props } from '../AppUsecase/AppUsecase'
import styles from './Archipelag.module.scss'
import { getImages } from '../utils/getImages'

const imgs = getImages(require.context(`@/images/usecases/archipelag`, false, /.png$/))

const content: Props['content'] = {
  whatDid: 'Помогали кандидатам стать участниками акселерационной программы.',
  goal: 'Упростить процесс оплаты от физических и юридических лиц.',
  result: 'Собрали все оргвзносы за неделю.',
  solution: [
    'Написали виджет приема оплаты и интегрировали его с системой 1С.',
    'Организовали обзвон участников с напоминанием об оплате.',
    'Еще пять агентов отправляли оригиналы документов и синхронизировали списки оплативших от юридического лица — в результате получили всего один запрос на возврат средств.'
  ]
} as const

const Archipelag: React.FC = ({}) => (
  <AppUsecase imgs={imgs} content={content} className={styles.Archipelag}></AppUsecase>
)

export default Archipelag
