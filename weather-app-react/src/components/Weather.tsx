import React, { Fragment, useRef, useState } from 'react'
import { weatherData } from '../interfaces/Interfaces'
import WeatherApi from './WeatherFetch'
import styles from '../styles/Weather.module.css'
import { IconButton, TextField } from '@mui/material'
import WeatherDetails from './WeatherDetails'
import SearchIcon from '@mui/icons-material/Search'

const alertInfo = (errorMsg: string | undefined) => {
  return <h1 className={errorMsg ? styles.errorMsg : styles.errorMsgHidden}>{errorMsg}</h1>
}

const Weather = () => {
  const [hidden, setHidden] = useState(true)
  const city = useRef<HTMLInputElement>(null)
  const [tempInfo, setTempInfo] = useState<weatherData>()
  const [errorMsg, setErrorMsg] = useState<string>('')
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    const enteredValue = city.current?.value
    WeatherApi(enteredValue).then((data) => {
      setTempInfo(data)
      if (!data.weather) {
        setHidden(true)
        setErrorMsg(data?.message)
      }
      if (hidden && data?.weather !== undefined) {
        setHidden(!hidden)
      }
    })
  }

  return (
    <Fragment>
      <div id={'weatherMain'} className={styles.weatherForm}>
        <h2>Weather App</h2>
        <form className={styles.cityInput} onSubmit={(e) => submitHandler(e)}>
          <TextField
            label="City"
            multiline
            margin="none"
            defaultValue="Gdynia"
            className={styles.inputText}
            variant="standard"
            id="text"
            type="text"
            name="city"
            error={city.current?.value === ''}
            helperText={city.current?.value === '' ? 'Empty field!' : ''}
            inputRef={city}
          />
          <IconButton color="primary" type="submit">
            <SearchIcon />
          </IconButton>
        </form>
      </div>
      <hr className={styles.solid} />
      <div>
        <div className={hidden ? styles.errorMsg : styles.errorMsgHidden}>{alertInfo(errorMsg)}</div>
        <div className={hidden ? styles.weatherBoxDetailHidden : styles.weatherBoxDetail}>
          {tempInfo ? <WeatherDetails weatherInfo={tempInfo} /> : null}
        </div>
      </div>
    </Fragment>
  )
}

export default Weather
