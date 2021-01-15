import React from 'react'
import { ReactComponent as IconCallParticipants } from '@/images/icons/forProjects/call_participants.svg'
import { ReactComponent as IconNewsletters } from '@/images/icons/forProjects/newsletters.svg'
import { ReactComponent as IconInviteParticipants } from '@/images/icons/forProjects/invite_participants.svg'
import { ReactComponent as IconSetupUtm } from '@/images/icons/forProjects/setup_utm.svg'
import { ReactComponent as IconHotline } from '@/images/icons/forProjects/hotline.svg'
import { ReactComponent as IconCollectDocuments } from '@/images/icons/forProjects/collect_documents.svg'
import { ReactComponent as IconMakeFaq } from '@/images/icons/forProjects/make_faq.svg'
import { ReactComponent as IconCalcNps } from '@/images/icons/forProjects/calc_nps.svg'
import SectionAccordion from '../SectionAccordion/SectionAccordion'

const cards = [
  {
    Icon: IconCallParticipants,
    text: 'Позвоним участникам и&nbsp;напомним о&nbsp;дедлайнах'
  },
  {
    Icon: IconNewsletters,
    text: 'Отправим информационные рассылки'
  },
  {
    Icon: IconInviteParticipants,
    text: 'Пригласим участников подписаться на&nbsp;ваш канал'
  },
  {
    Icon: IconSetupUtm,
    text: 'Настроим учет прихода клиентов по&nbsp;<nobr>UTM-меткам</nobr>'
  },
  {
    Icon: IconHotline,
    text: 'Запустим горячую линию'
  },
  {
    Icon: IconCollectDocuments,
    text: 'Соберем документы'
  },
  {
    Icon: IconMakeFaq,
    text: 'Составим FAQ'
  },
  {
    Icon: IconCalcNps,
    text: 'Посчитаем NPS'
  }
] as const

const SectionForProjects: React.FC<Props> = ({ className }) => {
  const title = (
    <>
      <i>Для</i> проектов
    </>
  )
  const description = 'Повысим вовлеченность участников, настроим автоматические уведомления, соберем обратную связь.'
  return <SectionAccordion title={title} description={description} cards={cards} className={className} />
}

interface Props {
  className?: string
}

export default SectionForProjects
