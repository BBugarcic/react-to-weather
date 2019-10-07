import { default as c } from 'classnames'
import React from 'react'
import { CITIES } from '../constants'
import '../styles/navPanels.scss'
import { getCityName } from '../utilities/functions'
import SelectedCity from './SelectedCity'

export interface NavPanelsProps {
  handleChange(selectedCity: string): void
  selectedCity: string
}

const NavPanels: React.FC<NavPanelsProps> = props => {
  const { handleChange, selectedCity } = props

  return (
    <div className={c('navPanels')}>
      <SelectedCity selectedCity={selectedCity} />
      <nav>
        {CITIES.map(
          (city: string, index: number): JSX.Element => {
            return (
              <h3
                key={`${index}-${city}`}
                className={c('navPanel', { selected: selectedCity === city })}
                onClick={() => {
                  handleChange(city)
                }}
              >
                {getCityName(city)}
              </h3>
            )
          }
        )}
      </nav>
    </div>
  )
}

export default NavPanels
