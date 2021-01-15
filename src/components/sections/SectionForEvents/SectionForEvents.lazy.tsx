import React, { lazy, Suspense } from 'react'

const LazySectionForEvents = lazy(() => import('./SectionForEvents'))

const SectionForEvents = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazySectionForEvents {...props} />
  </Suspense>
)

export default SectionForEvents
