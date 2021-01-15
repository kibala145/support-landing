import React, { lazy, Suspense } from 'react'

const LazySectionBubbles = lazy(() => import('./SectionBubbles'))

const SectionBubbles = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => (
  <Suspense fallback={null}>
    <LazySectionBubbles {...props} />
  </Suspense>
)

export default SectionBubbles
