import React, { lazy, Suspense } from 'react'
import { Props } from './SectionAccordion'

const LazySectionAccordion = lazy(() => import('./SectionAccordion'))

const SectionAccordion = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazySectionAccordion {...props} />
  </Suspense>
)

export default SectionAccordion
