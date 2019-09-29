import { default as c } from 'classnames'
import React from 'react'
import InfoPanel from './InfoPanel'
import NavPanels from './NavPanels'

const WeatherDashboard: React.FC = () => {
  return (
    <div className={c('dashboard')}>
      <NavPanels />
      <InfoPanel />
    </div>
  )
}

export default WeatherDashboard
