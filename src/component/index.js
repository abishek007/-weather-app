import React from "react"
import { reduxForm } from "redux-form"
import Container from "../container"
import "./styles.css"

const WeatherApp = (props) => {

  return (
    <div className="weather-container">
      <img className="img-sec" src="https://image.freepik.com/free-vector/weather-icons_23-2147513696.jpg" alt="weather"/>
      <button id='#install-button'>Show prompt</button>
    </div>
  )
}

export default Container(reduxForm({
	form: "WEATHER_APP",
	onSubmit: () => { },
})(WeatherApp))
