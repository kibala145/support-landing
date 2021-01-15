import React, { lazy, Suspense } from 'react'
import { Props } from './SectionDistractionNote'

const LazySectionDistractionNote = lazy(() => import('./SectionDistractionNote'))

const SectionDistractionNote = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode } & Props) => (
  <Suspense fallback={null}>
    <LazySectionDistractionNote {...props} />
  </Suspense>
)

export default SectionDistractionNote
