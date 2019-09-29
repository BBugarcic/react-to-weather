import axios, { AxiosResponse } from 'axios'
import { CurrentWeather } from '../App'

export const getWeatherInfo = async (
  city: string = 'london'
): Promise<CurrentWeather> => {
  const response: AxiosResponse<CurrentWeather> = await axios.get(
    '/currentWeather',
    { params: city }
  )
  return response.data
}
