import React from 'react'
import AppUsecase, { Props } from '../AppUsecase/AppUsecase'
import styles from './Platform.module.scss'
import { getImages } from '../utils/getImages'

const imgs = getImages(require.context(`@/images/usecases/platform`, false, /.png$/))

const content: Props['content'] = {
  whatDid: 'Запустили службу персональных помощников для сотрудников государственной организации.',
  goal: 'Освободить фронт-офисные службы от рутины.',
  result: 'За 3 месяца решили 300 задач, освободив сотрудникам фронт-офиса 780 часов на стратегически важные задачи.',
  solution: [
    'Сделали службу одного окна, куда попадают все обращения фронт-офиса (оформить отпуск, найти информацию, собрать подписи, написать отчет).',
    'Исполнили роль мидл-офиса — поддержка принимает обращения от фронт-офиса и сама решает вопросы с бэк-офисом.',
    'Повысили уровень удовлетворенности сотрудников, выявили слабые бизнес-процессы в компании, предложили, как их улучшить.'
  ]
} as const

const Platform: React.FC = ({}) => <AppUsecase imgs={imgs} content={content} className={styles.Platform}></AppUsecase>

export default Platform
