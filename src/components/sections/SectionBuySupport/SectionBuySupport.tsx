import React, { useState } from 'react'
import styles from './SectionBuySupport.module.scss'
import AppContainer from '@/components/AppContainer/AppContainer'
import AppRadio from '@/components/uikit/AppRadio/AppRadio'
import { firestore } from '@/services/firebase'

const options = [
  { id: 'event', label: 'Мероприятие' },
  { id: 'organization', label: 'Компания' },
  { id: 'project', label: 'Проект' },
  { id: 'service', label: 'Сервис' },
  { id: 'others', label: 'Другое' }
]

const SectionBuySupport: React.FC<Props> = ({ className = '', id = '' }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await firestore.collection('support-landing').add(form)
    setDidSend(true)
  }
  const [form, setForm] = useState({ name: '', phone: '', email: '', reason: 'event' })
  const [didSend, setDidSend] = useState(false)
  const isDisabled = () => (!form.phone && !form.email) || didSend
  return (
    <AppContainer id={id} className={`${styles.SectionBuySupport} ${className}`}>
      <h3>
        Заказать <i>поддержку</i>
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Имя Фамилия"
          type="text"
          value={form.name}
          readOnly={didSend}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Телефон"
          type="text"
          value={form.phone}
          readOnly={didSend}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <input
          placeholder="E-mail"
          type="text"
          value={form.email}
          readOnly={didSend}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <span className={styles.SectionBuySupport__label}>Для чего вам нужна поддержка</span>
        <AppRadio
          className={styles.SectionBuySupport__AppRadio}
          options={options}
          value={form.reason}
          disabled={didSend}
          onChange={(v) => setForm({ ...form, reason: String(v) })}
        />

        <div className={styles.SectionBuySupport__actions}>
          <button disabled={isDisabled()} type="submit" className={didSend ? 'pressed' : ''}>
            Заказать
          </button>
          <span style={{ opacity: didSend ? 1 : 0 }}>Ваша заявка отправлена!</span>
        </div>
      </form>
    </AppContainer>
  )
}

export interface Props {
  className?: string
  id?: string
}

export default SectionBuySupport
