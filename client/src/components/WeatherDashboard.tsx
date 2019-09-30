import { default as c } from 'classnames'
import React from 'react'
import '../styles/dashboard.scss'
import InfoPanel from './InfoPanel'
import NavPanels from './NavPanels'

export interface WeatherDashboardProps {
  handleChange(selectedCity: string): void
  selectedCity: string
  icon: string
  city: string
  summary: string
  temperature: number
}

const WeatherDashboard: React.FC<WeatherDashboardProps> = props => {
  const { handleChange, selectedCity, icon, city, summary, temperature } = props
  return (
    <div className={c('dashboard')}>
      <NavPanels selectedCity={selectedCity} handleChange={handleChange} />
      <InfoPanel
        icon={icon}
        city={city}
        summary={summary}
        temperature={temperature}
      />
    </div>
  )
}

export default WeatherDashboard
