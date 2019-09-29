import { default as c } from 'classnames'
import React, { useState } from 'react'
import { CITIES } from '../constants'
import SelectedCity from './SelectedCity'

const NavPanels: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('london')

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
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </h3>
            )
          }
        )}
      </nav>
    </div>
  )
}

export default NavPanels
