import { default as c } from 'classnames'
import React from 'react'
import '../styles/selectedCity.scss'
import { getCityName } from '../utilities/functions'

interface SelectedCityProps {
  selectedCity: string
}

const SelectedCity: React.FC<SelectedCityProps> = props => {
  const { selectedCity } = props
  return (
    <div className={c('selectedCity')}>
      <h1>{getCityName(selectedCity)}</h1>
    </div>
  )
}

export default SelectedCity
