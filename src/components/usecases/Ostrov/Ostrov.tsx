import React from 'react'
import AppUsecase, { Props } from '../AppUsecase/AppUsecase'
import styles from './Ostrov.module.scss'
import { getImages } from '../utils/getImages'

const imgs = getImages(require.context(`@/images/usecases/ostrov`, false, /.png$/))

const content: Props['content'] = {
  whatDid: 'Создали сервис быстрого информирования участников двухнедельной образовательной конференции.',
  goal: 'Помочь организатору снизить негатив участников от организационных проблем.',
  result: 'К концу мероприятия индекс удовлетворенности участников вырос в 5 раз.',
  solution: [
    'Сделали бота, который отправлял быстрые уведомления, когда номера аудиторий внезапно менялись.',
    'Ежедневно собирали обратную связь в формате NPS.',
    'Запустили отвлекающий сервис нетворкинга, чтобы участники знакомились друг с другом, пока решаются организационные вопросы.'
  ]
} as const

const Ostrov: React.FC = ({}) => <AppUsecase imgs={imgs} content={content} className={styles.Ostrov}></AppUsecase>

export default Ostrov
