import React from "react"
import { reduxForm } from "redux-form"
import Container from "../container"
import "./styles.css"

const WeatherApp = (props) => {

  return (
    <div className="weather-container">
      <img className="img-sec" src="https://miro.medium.com/max/560/1*bnT_p1TufQokvax_gcVT_g.png" alt="pwa"/>
    </div>
  )
}

export default Container(reduxForm({
	form: "WEATHER_APP",
	onSubmit: () => { },
})(WeatherApp))
