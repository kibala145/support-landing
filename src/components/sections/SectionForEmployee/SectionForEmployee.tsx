import React from 'react'
import { ReactComponent as IconPrepareReport } from '@/images/icons/forEmployee/prepare_report.svg'
import { ReactComponent as IconWriteLetters } from '@/images/icons/forEmployee/write_letters.svg'
import { ReactComponent as IconDecryptAudio } from '@/images/icons/forEmployee/decrypt_audio.svg'
import { ReactComponent as IconPickUsefulServices } from '@/images/icons/forEmployee/pick_useful_services.svg'
import { ReactComponent as IconFollowUpMeetup } from '@/images/icons/forEmployee/follow_up_meetup.svg'
import { ReactComponent as IconFindContractor } from '@/images/icons/forEmployee/find_contractor.svg'
import { ReactComponent as IconOrganizeDelivery } from '@/images/icons/forEmployee/organize_delivery.svg'
import { ReactComponent as IconWriteInstructions } from '@/images/icons/forEmployee/write_instructions.svg'
import { ReactComponent as IconTranslateText } from '@/images/icons/forEmployee/translate_text.svg'
import { ReactComponent as IconCollectDocuments } from '@/images/icons/forEmployee/collect_documents.svg'
import { ReactComponent as IconMakePresentation } from '@/images/icons/forEmployee/make_presentation.svg'
import { ReactComponent as IconOrganizeFiles } from '@/images/icons/forEmployee/organize_files.svg'
import SectionAccordion from '../SectionAccordion/SectionAccordion'

const cards = [
  {
    Icon: IconPrepareReport,
    text: 'Подготовим отчет или справку'
  },
  {
    Icon: IconWriteLetters,
    text: 'Напишем и отправим письма'
  },
  {
    Icon: IconDecryptAudio,
    text: 'Расшифруем аудиозаписи'
  },
  {
    Icon: IconPickUsefulServices,
    text: 'Подберем полезные сервисы'
  },
  {
    Icon: IconFollowUpMeetup,
    text: 'Составим и разошлем фоллоу-ап встречи'
  },
  {
    Icon: IconFindContractor,
    text: 'Проанализируем рынок и найдем подрядчика'
  },
  {
    Icon: IconOrganizeDelivery,
    text: 'Организуем доставку'
  },
  {
    Icon: IconCollectDocuments,
    text: 'Соберем базу документов'
  },
  {
    Icon: IconWriteInstructions,
    text: 'Напишем инструкции'
  },
  {
    Icon: IconMakePresentation,
    text: 'Соберем презентацию'
  },
  {
    Icon: IconTranslateText,
    text: 'Сделаем перевод текста'
  },
  {
    Icon: IconOrganizeFiles,
    text: 'Структурируем файлы'
  }
] as const

const SectionForEmployee: React.FC<Props> = ({ className }) => {
  const title = (
    <>
      <i>Для</i> сотрудников
    </>
  )
  const description =
    'Станем вашим личным ассистентом и избавим от рутинных задач: соберем данные от контрагентов, сделаем резюме встречи, подпишем документы у руководителя.'
  return <SectionAccordion title={title} description={description} cards={cards} className={className} />
}

interface Props {
  className?: string
}

export default SectionForEmployee
