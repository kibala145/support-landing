import React from 'react'
import { ReactComponent as IconParticipantsAnalytics } from '@/images/icons/forEvents/paricipants_analytics.svg'
import { ReactComponent as IconWriteReport } from '@/images/icons/forEvents/write_report.svg'
import { ReactComponent as IconSendAnnouncement } from '@/images/icons/forEvents/send_announcement.svg'
import { ReactComponent as IconCollectFeedback } from '@/images/icons/forEvents/collect_feedback.svg'
import { ReactComponent as IconPrintBadges } from '@/images/icons/forEvents/print_badges.svg'
import { ReactComponent as IconSetupZoom } from '@/images/icons/forEvents/setup_zoom.svg'
import { ReactComponent as IconSetupPayments } from '@/images/icons/forEvents/setup_payments.svg'
import { ReactComponent as IconAdviceService } from '@/images/icons/forEvents/advice_service.svg'
import { ReactComponent as IconMakeupPromo } from '@/images/icons/forEvents/makeup_promo.svg'
import { ReactComponent as IconWritePosts } from '@/images/icons/forEvents/write_posts.svg'
import { ReactComponent as IconTranslateEnglish } from '@/images/icons/forEvents/translate_english.svg'
import { ReactComponent as IconCollectParticipants } from '@/images/icons/forEvents/collect_participants.svg'
import SectionAccordion from '../SectionAccordion/SectionAccordion'

const cards = [
  {
    Icon: IconParticipantsAnalytics,
    text: 'Проведем аналитику по участникам'
  },
  {
    Icon: IconWriteReport,
    text: 'Напишем отчет для ваших стейкхолдеров'
  },
  {
    Icon: IconSendAnnouncement,
    text: 'Разошлем анонс и подведем итоги мероприятия'
  },
  {
    Icon: IconCollectFeedback,
    text: 'Соберем обратную связь от участников и экспертов'
  },
  {
    Icon: IconPrintBadges,
    text: 'Напечатаем бейджики и баннеры'
  },
  {
    Icon: IconSetupZoom,
    text: 'Настроим Zoom или другую площадку'
  },
  {
    Icon: IconSetupPayments,
    text: 'Организуем прием платежей'
  },
  {
    Icon: IconAdviceService,
    text: 'Посоветуем сервис или сами сделаем виджеты на вашем сайте'
  },
  {
    Icon: IconMakeupPromo,
    text: 'Сверстаем промостраницу мероприятия'
  },
  {
    Icon: IconWritePosts,
    text: 'Напишем посты для соцсетей'
  },
  {
    Icon: IconTranslateEnglish,
    text: 'Переведем все на английский язык'
  },
  {
    Icon: IconCollectParticipants,
    text: 'Соберем список участников из разных файлов'
  }
] as const

const SectionForEvents: React.FC<Props> = ({ className }) => {
  const title = (
    <>
      <i>Для</i> мероприятий
    </>
  )
  const description =
    'Сопровождаем посетителей и&nbsp;экспертов&nbsp;до, во&nbsp;время и&nbsp;после ивента: напомним о&nbsp;событии, разошлем важную информацию, соберем оргвзносы с&nbsp;участников, доставим <nobr>вип-приглашения</nobr> гостям.'
  return <SectionAccordion title={title} description={description} cards={cards} className={className} />
}

interface Props {
  className?: string
}

export default SectionForEvents
