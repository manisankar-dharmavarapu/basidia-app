import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from 'react-redux'
import './index.css'

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
}
const Weather = () => {
  const statesData = useSelector((state) => state.users.statesData)
  const [weatherInfo, setWeatherInfo] = useState({})
  const [selectedState, setSelectedState] = useState('')
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  // const [touched, setTouched] = useState({
  //   setSelectedState
  // })
  const onSelectState = (e) => {
    setSelectedState(e.target.value)
  }

  const getWeatherInfo = () => {
    setApiStatus(apiStatusConstants.inProgress)
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: `${selectedState},in`,
        lat: '0',
        lon: '0',
        callback: 'test',
        id: '2172797',
        lang: 'null',
        units: 'imperial',
        mode: 'xml'
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'f1ca13614bmsh3ee6ac4c6245391p1fa242jsn4b1528031810'
      }
    };

    axios.request(options).then(function (response) {
      const data = response.data.substring(5, response.data.length - 1)
      const parsedData = JSON.parse(data)
      if (parsedData) {
        setWeatherInfo(parsedData.main)
        setApiStatus(apiStatusConstants.success)
      }
    })
      .catch(function (error) {
        setApiStatus(apiStatusConstants.failure)
      });
  }

  useEffect(() => {
    if (selectedState !== '') {
      getWeatherInfo()
    }
  }, [selectedState])

  console.log(weatherInfo, "data")

  const renderingError = () => (
    <div>
      <h1 className='loading'>Something went wrong. Please try again.</h1>
    </div>
  )

  const renderLoading = () => (
    <div>
      <h1 className='loading'>loading....</h1>
    </div>
  )
  
  const renderWeatherInfo = () => (
    <div className='climateinfo-container'>
      <div className='temp'>
        <p>Temparaure</p>
        <h1 className="temp-item">{weatherInfo.temp}&deg;c <span className='vr' style={{ marginLeft: '25px' }}></span></h1>
      </div>
      <div className='temp'>
        <p>Humidty</p>
        <h1 className="temp-item">{weatherInfo.humidity}</h1>
      </div>
      <div className='temp'>
        <p>Pressure</p>
        <h1 className="temp-item"><span className='vr' style={{ marginRight: '25px' }}></span>{weatherInfo.pressure}</h1>
      </div>
    </div>
  )

  const renderWeather = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderWeatherInfo()
      case apiStatusConstants.failure:
        return renderingError()
      case apiStatusConstants.inProgress:
        return renderLoading()
      default:
        return null
    }
  }

  return (
    <div>
      <p className='section-title'>Weather</p>
      <div className='weather-container'>
        <div className="select-container">
          <label className="input-label" htmlFor="state">Select State</label>
          <div className="select-error-container">
            <select
              id="state"
              name="stateData"
              // className={touched.stateData && !!errors.stateData ? `error-input select-styles` : `select-styles active-input`}
              // onBlur={onBlur}
              className='state-select active-input'
              value={selectedState}
              onChange={onSelectState}
            >
              <option value="">Select Provider</option>
              {statesData.map((state) => {
                return (
                  <option
                    key={state.code}
                    value={state.city}
                  >
                    {state.name}
                  </option>
                )
              })}
            </select>
            {/* {touched.stateData && !!errors.stateData && <span className="error-msg">{errors.stateData}</span>} */}
          </div>
          {renderWeather()}
        </div>
      </div>
    </div>
  )
}
export default Weather