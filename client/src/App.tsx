import React, { Component } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import 'weather-icons/css/weather-icons.css'
import './App.scss'
import WeatherDashboard from './components/WeatherDashboard'
import { spinnerStyle } from './styles/cssInJsConstants'
import { getWeatherInfo } from './utilities/apiCalls'

interface AppState {
  isLoaded: boolean
  data: any
  error: any
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
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: null,
    }
  }

  async componentDidMount() {
    const data: CurrentWeather = await getWeatherInfo()
    this.setState({
      data: data,
      isLoaded: !!data,
    })
  }

  render() {
    const { isLoaded, data } = this.state
    if (isLoaded) {
      return <WeatherDashboard />
    } else {
      return <BarLoader css={spinnerStyle} />
    }
  }
}

export default App
