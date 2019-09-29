import React, { Component } from 'react'
import './App.scss'
import logo from './logo.svg'
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
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
