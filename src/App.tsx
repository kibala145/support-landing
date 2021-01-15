import React from 'react'
import styles from './App.module.scss'

import { UsecasesModalProvider } from './contexts/UsecasesModalContext'
import { BreakpointProviderDefault } from './contexts/ViewportContext'

import SectionMain from './components/sections/SectionMain/SectionMain'
import SectionBubbles from './components/sections/SectionBubbles/SectionBubbles'
import SectionForEvents from './components/sections/SectionForEvents/SectionForEvents'
import SectionForProjects from './components/sections/SectionForProjects/SectionForProjects'
import SectionForEmployee from './components/sections/SectionForEmployee/SectionForEmployee'
import SectionForServices from './components/sections/SectionForServices/SectionForServices'
import SectionHowWeWork from './components/sections/SectionHowWeWork/SectionHowWeWork'
import SectionUsecases from './components/sections/SectionUsecases/SectionUsecases'
import SectionBuySupport from './components/sections/SectionBuySupport/SectionBuySupport'
import SectionReasons from './components/sections/SectionReasons/SectionReasons'
import SectionDistractionNote from './components/sections/SectionDistractionNote/SectionDistractionNote'

const sectionsAccordion = [SectionForEvents, SectionForProjects, SectionForEmployee, SectionForServices] as const

function App() {
  return (
    <BreakpointProviderDefault>
      <UsecasesModalProvider>
        <div className={styles.App}>
          <div className={styles.App__groupTop}>
            <SectionMain className={styles.App__SectionMain} />
            <SectionBubbles className={styles.App__SectionBubbles} />
          </div>
          <SectionDistractionNote className={styles.App__SectionDistractionNote} />
          {sectionsAccordion.map((Item, index) => (
            <Item key={index} className={styles.App__SectionAccordion} />
          ))}
          <div className={styles.App__groupMain}>
            <SectionHowWeWork className={styles.App__SectionHowWeWork} />
            <SectionUsecases className={styles.App__SectionUsecases} />
            <SectionReasons className={styles.App__SectionReasons} />
          </div>
          <SectionBuySupport id="formOrder" className={styles.App__SectionBuySupport} />
        </div>
      </UsecasesModalProvider>
    </BreakpointProviderDefault>
  )
}

export default App
