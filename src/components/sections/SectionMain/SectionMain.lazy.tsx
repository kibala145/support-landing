import React, { lazy, Suspense } from 'react'

const LazySectionMain = lazy(() => import('./SectionMain'))

const SectionMain = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazySectionMain {...props} />
  </Suspense>
)

export default SectionMain
