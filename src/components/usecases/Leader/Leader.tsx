import React from 'react'
import AppUsecase, { Props } from '../AppUsecase/AppUsecase'
import styles from './Leader.module.scss'
import { getImages } from '../utils/getImages'

const imgs = getImages(require.context(`@/images/usecases/leader`, false, /.png$/))

const content: Props['content'] = {
  whatDid: 'Запустили круглосуточную поддержку платформы с&nbsp;миллионной аудиторией.',
  goal: 'Повысить показатель возвращаемости пользователей.',
  result:
    'Увеличили возвращаемость пользователей&nbsp;&mdash; организаторов и&nbsp;посетителей мероприятий&nbsp;&mdash; на&nbsp;30%.',
  solution: [
    'Собрали агентов поддержки из&nbsp;разных часовых поясов, чтобы ни&nbsp;одно мероприятие не&nbsp;пострадало из-за разницы во&nbsp;времени.',
    'Сделали лендинг, который обеспечил поток новых агентов поддержки в&nbsp;компанию.',
    'Отказались от&nbsp;сложных NPS-опросов в&nbsp;пользу простых в&nbsp;формате &laquo;да&nbsp;&mdash; нет&raquo;.',
    'Запустили оригинальную рассылку с&nbsp;поздравлениями ко&nbsp;дню рождения пользователей.',
    'Разработали рекомендательную систему, которая советует мероприятия с&nbsp;учетом интересов пользователей.'
  ]
} as const

const Leader: React.FC = ({}) => <AppUsecase imgs={imgs} content={content} className={styles.Leader}></AppUsecase>

export default Leader
