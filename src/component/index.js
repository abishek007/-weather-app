import React from "react"
import { reduxForm, Field } from "redux-form"
import Container from "../container"
import renderInput from "./renderInput"
import "./styles.css"

const WeatherApp = (props) => {
  const {
    name,
    temparature,
    humidity,
    condition,
    cityDataRequest
  } = props
  return (
    <div className="weather-container">
      <img className="img-sec" src="https://image.freepik.com/free-vector/weather-icons_23-2147513696.jpg" alt="weather"/>
      <div className="right-sec">
        <p className="title-sec">Weather App</p>
        <div className="form-sec">
          <Field
            name="weatherCity"
            component={renderInput}
            placeholder="Enter the city"
          />
          <button onClick={cityDataRequest}>Get Weather</button>
        </div>
        <div className="info-sec">
          <p className="title">Location:</p>
          <p className="value">{name}</p>
        </div>
        <span className="seperator"></span>
        <div className="info-sec">
          <p className="title">Tempature:</p>
          <p className="value">{temparature}</p>
        </div>
        <span className="seperator"></span>
        <div className="info-sec">
          <p className="title">Humidity:</p>
          <p className="value">{humidity}</p>
        </div>
        <span className="seperator"></span>
        <div className="info-sec">
          <p className="title">Conditions:</p>
          <p className="value">{condition}</p>
        </div>
      </div>
    </div>
  )
}

export default Container(reduxForm({
  form: "WEATHER_APP",
  onSubmit: () => { },
  })(WeatherApp))