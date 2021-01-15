import React, { lazy, Suspense } from 'react'
import { Props } from './SectionReasonsItem'

const LazySectionReasonsItem = lazy(() => import('./SectionReasonsItem'))

const SectionReasonsItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazySectionReasonsItem {...props} />
  </Suspense>
)

export default SectionReasonsItem
