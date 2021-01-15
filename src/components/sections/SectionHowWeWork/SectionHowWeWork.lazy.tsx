import React, { lazy, Suspense } from 'react'

const LazySectionHowWeWork = lazy(() => import('./SectionHowWeWork'))

const SectionHowWeWork = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazySectionHowWeWork {...props} />
  </Suspense>
)

export default SectionHowWeWork
