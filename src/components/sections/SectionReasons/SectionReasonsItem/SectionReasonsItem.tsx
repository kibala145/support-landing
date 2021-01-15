import React, { useEffect, useRef, useState } from 'react'
import styles from './SectionReasonsItem.module.scss'

const SectionReasonsItem: React.FC<Props> = ({ text, title, order }) => {
  const IconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const importIcon = async () => {
      try {
        const { default: icon } = await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!@/images/icons/hand${order}.svg`)
        IconRef.current = icon
      } catch (err) {
        throw err
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [order])

  if (!loading && IconRef.current) {
    const { current: IconHand } = IconRef
    return (
      <div className={styles.SectionReasonsItem}>
        <IconHand />
        <p className={styles.SectionReasonsItem__title} dangerouslySetInnerHTML={{ __html: title }} />
        <p className={styles.SectionReasonsItem__text} dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    )
  }

  return null
}

export interface Props {
  title: string
  text: string
  order: number
}

export default SectionReasonsItem
