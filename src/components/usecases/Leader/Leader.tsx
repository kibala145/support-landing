import React from 'react'
import AppUsecase, { Props } from '../AppUsecase/AppUsecase'
import styles from './Leader.module.scss'
import { getImages } from '../utils/getImages'

const imgs = getImages(require.context(`@/images/usecases/leader`, false, /.png$/))
const imgsPreview = getImages(require.context(`@/images/usecases/leader/preview`, false, /.png$/))

const imgsAdapted = imgs.map((item) => ({
  id: item.id,
  original: item.content,
  small: imgsPreview.find((i) => item.id === i.id)?.content ?? item.content
}))

const content: Props['content'] = {
  whatDid:
    'Запустили круглосуточную поддержку <a rel="noopener noreferrer" target="_blank" href="https://leader-id.ru/">платформы с&nbsp;миллионной аудиторией</a>.',
  goal: 'Повысить показатель возвращаемости пользователей.',
  result:
    'Увеличили возвращаемость пользователей&nbsp;&mdash; организаторов и&nbsp;посетителей мероприятий&nbsp;&mdash; на&nbsp;30%.',
  solution: [
    'Собрали агентов поддержки из&nbsp;разных часовых поясов, чтобы ни&nbsp;одно мероприятие не&nbsp;пострадало из-за разницы во&nbsp;времени.',
    'Сделали <a rel="noopener noreferrer" target="_blank" href="https://2035.dev/welcome-support/">лендинг</a>, который обеспечил поток новых агентов поддержки в&nbsp;компанию.',
    'Отказались от&nbsp;сложных NPS-опросов в&nbsp;пользу простых в&nbsp;формате &laquo;да&nbsp;&mdash; нет&raquo;.',
    'Запустили оригинальную рассылку с&nbsp;поздравлениями ко&nbsp;дню рождения пользователей.',
    'Разработали рекомендательную систему, которая советует мероприятия с&nbsp;учетом интересов пользователей.'
  ]
} as const

const Leader: React.FC = ({}) => <AppUsecase imgs={imgsAdapted} content={content} className={styles.Leader} />

export default Leader
