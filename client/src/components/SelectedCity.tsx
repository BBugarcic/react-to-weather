import { default as c } from 'classnames'
import React from 'react'

interface SelectedCityProps {
  selectedCity: string
}

const SelectedCity: React.FC<SelectedCityProps> = props => {
  const { selectedCity } = props
  return (
    <div className={c('selectedCity')}>
      <h1>{selectedCity}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus sit
        delectus sequi aliquid eaque quo esse suscipit, beatae omnis blanditiis
        ipsam facere tempora aliquam possimus vel est cupiditate officiis?
      </p>
    </div>
  )
}

export default SelectedCity
