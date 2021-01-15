import React, { lazy, Suspense } from 'react'
import { Props } from './SectionUsecases'

const LazySectionUsecases = lazy(() => import('./SectionUsecases'))

const SectionUsecases = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazySectionUsecases {...props} />
  </Suspense>
)

export default SectionUsecases
