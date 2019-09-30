import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import WeatherDashboard from './components/WeatherDashboard'
import { spinnerStyle } from './styles/cssInJsConstants'
import './styles/index.scss'
import { getWeatherInfo } from './utilities/apiCalls'
import { getNumber, getString } from './utilities/functions'

export interface AppState {
  isLoaded: boolean
  data?: CurrentWeather
  error?: any
}

type Keys =
  | 'apparentTemperature'
  | 'cloudCover'
  | 'dewPoint'
  | 'humidity'
  | 'nearestStormDistance'
  | 'ozone'
  | 'precipIntensity'
  | 'precipIntensityError'
  | 'precipProbability'
  | 'pressure'
  | 'temperature'
  | 'time'
  | 'uvIndex'
  | 'visibility'
  | 'windGust'
  | 'windSpeed'
  | 'icon'
  | 'precipType'
  | 'summary'

export interface CurrentWeather {
  currently: {
    [K in Keys]: number | string
  }
  latitude: number
  longitude: number
  offset: number
  timezone: string
  city: string
}

const App: React.FC = () => {
  const initialCity: string = 'london'
  const [appState, setAppState] = useState<AppState>({
    error: null,
    isLoaded: false,
  })

  useEffect(
    (initialCity: string = 'london') => {
      axios
        .get('/currentWeather', { params: initialCity })
        .then(response => {
          response.data.city = initialCity
          setAppState({ isLoaded: true, data: response.data })
        })
        .catch(error => setAppState({ isLoaded: false, error: error }))
    },
    [initialCity]
  )

  const handleChange = async (selectedCity: string) => {
    const data: CurrentWeather = await getWeatherInfo(selectedCity)
    setAppState({
      data: data,
      isLoaded: !!data,
    })
  }

  return (
    <>
      {appState.isLoaded && (
        <WeatherDashboard
          selectedCity={(!!appState.data && appState.data.city) || 'london'}
          handleChange={handleChange}
          icon={appState.data ? getString(appState.data.currently.icon) : ''}
          city={appState.data ? getString(appState.data.city) : ''}
          summary={
            appState.data ? getString(appState.data.currently.summary) : ''
          }
          temperature={
            appState.data ? getNumber(appState.data.currently.temperature) : 0
          }
        />
      )}
      {!appState.isLoaded && <BarLoader css={spinnerStyle} />}
    </>
  )
}

export default App
