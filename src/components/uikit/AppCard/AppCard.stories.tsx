import React from 'react'
import { storiesOf } from '@storybook/react'
import AppCard from './AppCard'
import { ReactComponent as Icon } from './../../../images/icons/cross.svg'

storiesOf('AppCard', module).add('default', () => <AppCard Icon={Icon} text="Проведем аналитику по участникам" />)
