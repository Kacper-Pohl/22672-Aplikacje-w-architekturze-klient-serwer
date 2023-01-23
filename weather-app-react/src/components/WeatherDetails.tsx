import React, { Fragment } from 'react'
import { Box, Grid } from '@mui/material'
import styles from '../styles/Weather.module.css'
import { weatherData } from '../interfaces/Interfaces'

const dateNow = (city: string | undefined) => {
  const d: Date = new Date()
  return <p>{city + ' ' + d.toLocaleString()}</p>
}
const windDirection = (degree: number) => {
  var val = Math.floor(degree / 22.5 + 0.5)
  var arr = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
  return arr[val % 16]
}

const WeatherDetails: React.FC<{
  weatherInfo: weatherData | undefined
}> = ({ weatherInfo }) => {
  const weatherIcon =
    weatherInfo?.weather === undefined
      ? undefined
      : `http://openweathermap.org/img/wn/${weatherInfo?.weather[0]?.icon}@2x.png`

  return (
    <Fragment>
      <Box className={styles.slideInTop} sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          className={styles.gridBox}
          id="grid-box"
        >
          <Grid className={styles.gridBorder} item xs={5}>
            <div>
              <div id="weather" className={styles.weatherBasicInfo}>
                <img src={weatherIcon} alt={'http://openweathermap.org/img/wn/10d@2x.png'} />
                <div className={styles.weatherBasicInfoText}>
                  <span className={styles.weatherTemp}>{weatherInfo?.main?.temp}℃</span>
                  <span className={styles.weatherMain}>
                    {weatherInfo?.weather === undefined ? undefined : weatherInfo?.weather[0]?.main}
                  </span>
                  <span className={styles.weatherDescription}>
                    {weatherInfo?.weather === undefined ? undefined : weatherInfo?.weather[0]?.description}
                  </span>
                </div>
              </div>
              {dateNow(weatherInfo?.name)}
            </div>
          </Grid>
          <Grid className={styles.gridBorder} item xs={3}>
            <div className={styles.weatherBasicInfoText}>
              <span>Wind - {windDirection(weatherInfo?.wind?.deg ?? 0)} </span>
              <p>Speed: {weatherInfo?.wind?.speed} m/s</p>
              <span>Direction: {weatherInfo?.wind?.deg}°</span>
            </div>
          </Grid>
          <Grid className={styles.gridBorder} item xs={4}>
            <div className={styles.weatherBasicInfoText}>
              <span>Humidity: {weatherInfo?.main?.humidity}%</span>
              <p>Pressure: {weatherInfo?.main?.pressure} hPa</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default WeatherDetails
