import axios, { AxiosResponse } from 'axios'
import { CurrentWeather } from '../App'

export const getWeatherInfo = async (
  city: string = 'london'
): Promise<CurrentWeather> => {
  let response: AxiosResponse<CurrentWeather> = await axios.get(
    '/currentWeather',
    { params: city }
  )
  response.data.city = city
  return response.data
}
