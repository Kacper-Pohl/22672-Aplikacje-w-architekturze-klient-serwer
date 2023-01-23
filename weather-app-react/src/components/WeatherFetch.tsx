import { weatherData } from '../interfaces/Interfaces'

const API_KEY = '092ee1f3ad20ab90f65d987b8f8ef7e8'

export default async function WeatherApi(city: string | undefined): Promise<weatherData> {
  try {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`, {
      method: 'GET',
    })
    return await res.json().then((data: weatherData) => {
      console.log(data)
      return data
    })
  } catch (error) {
    console.log(error)
    throw error
  }
}
