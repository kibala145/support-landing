import React, { lazy, Suspense } from 'react'
import { Props } from './SectionReasons'

const LazySectionReasons = lazy(() => import('./SectionReasons'))

const SectionReasons = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazySectionReasons {...props} />
  </Suspense>
)

export default SectionReasons
