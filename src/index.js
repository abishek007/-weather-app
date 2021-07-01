import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import WeatherApp from "./component"
import store from "./container/store"

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp />
  </Provider>,
  document.getElementById("root")
)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
}