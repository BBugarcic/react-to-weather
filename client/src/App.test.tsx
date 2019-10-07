import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { mount } from 'enzyme'
import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from './App'

const response = {
  data: {
    currently: {
      apparentTemperature: 13,
      cloudCover: 13,
      dewPoint: 13,
      humidity: 13,
      nearestStormDistance: 13,
      ozone: 13,
      precipIntensity: 13,
      precipIntensityError: 13,
      precipProbability: 13,
      pressure: 13,
      temperature: 13,
      time: 1311111111,
      uvIndex: 13,
      visibility: 13,
      windGust: 13,
      windSpeed: 13,
      icon: 'cloudy',
      precipType: 13,
      summary: 'test',
    },
    latitude: 13,
    longitude: 13,
    offset: 1,
    timezone: 'Europa/London',
    city: 'london',
  },
}

describe('<App />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    act(() => {
      ReactDOM.render(<App />, div)
    })
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders error message when api returns error', done => {
    const mock = new MockAdapter(axios)
    mock.onGet('/currentWeather').networkError()
    act(() => {
      const component = mount(<App />)
      setImmediate(() => {
        component.update()
        done()
      })
      expect(component).toMatchSnapshot()
    })
  })

  it('renders <WeatherDashboard /> when api response is success', done => {
    const mock = new MockAdapter(axios)
    mock.onGet('/currentWeather').reply(200, response.data)
    act(() => {
      const component = mount(<App />)
      setImmediate(() => {
        component.update()
        done()
      })
      expect(component).toMatchSnapshot()
    })
  })
})
