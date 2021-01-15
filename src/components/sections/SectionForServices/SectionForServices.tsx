import React from 'react'
import { ReactComponent as IconHotline } from '@/images/icons/forServices/hotline.svg'
import { ReactComponent as IconRunBot } from '@/images/icons/forServices/run_bot.svg'
import { ReactComponent as IconCallConsumers } from '@/images/icons/forServices/call_consumers.svg'
import { ReactComponent as IconQuarterReport } from '@/images/icons/forServices/quarter_report.svg'
import { ReactComponent as IconAnalyticReport } from '@/images/icons/forServices/analytic_report.svg'
import { ReactComponent as IconOnboarding } from '@/images/icons/forServices/onboarding.svg'
import { ReactComponent as IconAnalyzeConsumers } from '@/images/icons/forServices/analyze_consumers.svg'
import { ReactComponent as IconDashboard } from '@/images/icons/forServices/dashboard.svg'
import SectionAccordion from '../SectionAccordion/SectionAccordion'

const cards = [
  {
    Icon: IconHotline,
    text: 'Настроим круглосуточную горячую линию'
  },
  {
    Icon: IconRunBot,
    text: 'Запустим бота для обработки типовых запросов'
  },
  {
    Icon: IconCallConsumers,
    text: 'Обзвоним клиентов и расскажем о новой акции'
  },
  {
    Icon: IconQuarterReport,
    text: 'Напишем квартальный отчет'
  },
  {
    Icon: IconAnalyticReport,
    text: 'Составим аналитические отчеты для руководства '
  },
  {
    Icon: IconOnboarding,
    text: 'Встроим онбординг'
  },
  {
    Icon: IconAnalyzeConsumers,
    text: 'Проанализируем данные о клиентах'
  },
  {
    Icon: IconDashboard,
    text: 'Настроим дашборд с ключевыми метриками'
  }
] as const

const SectionForServices: React.FC<Props> = ({ className }) => {
  const title = (
    <>
      <i>Для</i> сервисов
    </>
  )
  const description =
    'Ответим на сообщения пользователей, настроим дашборды с аналитикой, расскажем клиентам о новых функциях.'
  return <SectionAccordion title={title} description={description} cards={cards} className={className} />
}

interface Props {
  className?: string
}

export default SectionForServices
