import React, { lazy, Suspense } from 'react'
import { Props } from './SectionBuySupport'

const LazySectionBuySupport = lazy(() => import('./SectionBuySupport'))

const SectionBuySupport = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazySectionBuySupport {...props} />
  </Suspense>
)

export default SectionBuySupport
