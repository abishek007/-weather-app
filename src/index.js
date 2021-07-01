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

    e.preventDefault()

    deferredPrompt = e

    console.log('beforeinstallprompt fired', deferredPrompt)

    document.querySelector('#install-button').disabled = false

  })

  let btnInstall = document.querySelector('#install-button')

  btnInstall.addEventListener('click', () => {
    // Update the install UI to remove the install button
    document.querySelector('#install-button').disabled = true;
    // Show the modal add to home screen dialog
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      // Clear the saved prompt since it can't be used again
      deferredPrompt = null;
    });
  });
}