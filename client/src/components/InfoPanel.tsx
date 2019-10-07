import { default as c } from 'classnames'
import React from 'react'
import '../styles/infoPanel.scss'

export interface InfoPanelProps {
  icon: string
  city: string
  summary: string
  temperature: number | null
}
const InfoPanel: React.FC<InfoPanelProps> = props => {
  const { icon, temperature, summary, city } = props
  const roundedTemp: number | null = temperature
    ? Math.round(temperature * 10) / 10
    : null

  const allClassNames = c(
    'info',
    { london: city === 'london' },
    { paris: city === 'paris' },
    { 'new-york-city': city === 'new_york_city' },
    { singapore: city === 'singapore' },
    { sydney: city === 'sydney' }
  )

  return (
    <section className={c('infoPanel')}>
      <div className={allClassNames}>
        <Icon name={icon} />
        <h1 className={c('temperature')}>{roundedTemp}&#8451;</h1>
        <div>
          <p>{summary}</p>
        </div>
      </div>
    </section>
  )
}

export default InfoPanel

interface IconProps {
  name: string
}

const Icon: React.FC<IconProps> = props => {
  const { name } = props
  return <div className={c('iconWrapper')}>{getIcon(name)}</div>
}

const getIcon = (name: string): JSX.Element => {
  switch (name) {
    case 'clear-day':
      return <img src='/images/clear-day.png' alt={name} />
    case 'clear-night':
      return <img src='/images/clear-night.png' alt={name} />
    case 'cloudy':
      return <img src='/images/cloudy.png' alt={name} />
    case 'fog':
      return <img src='/images/fog.png' alt={name} />
    case 'partly-cloudy-day':
      return <img src='/images/partly-cloudy-day.png' alt={name} />
    case 'partly-cloudy-night':
      return <img src='/images/partly-cloudy-night.png' alt={name} />
    case 'rain':
      return <img src='/images/rain.png' alt={name} />
    case 'sleet':
      return <img src='/images/sleet.png' alt={name} />
    case 'snow':
      return <img src='/images/snow.png' alt={name} />
    case 'wind':
      return <img src='/images/wind.png' alt={name} />
    default:
      return <></>
  }
}
