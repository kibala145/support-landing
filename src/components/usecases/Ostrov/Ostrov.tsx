import React from 'react'
import AppUsecase, { Props } from '../AppUsecase/AppUsecase'
import styles from './Ostrov.module.scss'
import { getImages } from '../utils/getImages'

const imgs = getImages(require.context(`@/images/usecases/ostrov`, false, /.png$/))
const imgsPreview = getImages(require.context(`@/images/usecases/ostrov/preview`, false, /.png$/))

const imgsAdapted = imgs.map((item) => ({
  id: item.id,
  original: item.content,
  small: imgsPreview.find((i) => item.id === i.id)?.content ?? item.content
}))

const content: Props['content'] = {
  whatDid: 'Создали сервис быстрого информирования участников двухнедельной образовательной конференции.',
  goal: 'Помочь организатору снизить негатив участников от&nbsp;организационных проблем.',
  result: 'К&nbsp;концу мероприятия индекс удовлетворенности участников вырос в&nbsp;5&nbsp;раз.',
  solution: [
    'Сделали бота, который отправлял быстрые уведомления, когда номера аудиторий внезапно менялись.',
    'Ежедневно собирали обратную связь <a rel="noopener noreferrer" target="_blank" href="https://2035.dev/nps/ostrov/">в&nbsp;формате NPS</a>.',
    'Запустили отвлекающий <a rel="noopener noreferrer" target="_blank" href="https://networking.leader-id.ru/">сервис нетворкинга</a>, чтобы участники знакомились друг с&nbsp;другом, пока решаются организационные вопросы.'
  ]
} as const

const Ostrov: React.FC = ({}) => <AppUsecase imgs={imgsAdapted} content={content} className={styles.Ostrov} />

export default Ostrov
