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
  let deferredPrompt
  window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e

    console.log('beforeinstallprompt fired', deferredPrompt)

    deferredPrompt.userChoice
      .then((outcome) => {
        console.log(`User choice to install prompt: ${outcome}`)
      })

  })
}