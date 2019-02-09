const apiKey = "efb887bd45ac544c47571a0bdd75d15a"

const weatherApi = (city) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`
  return fetch(url, { method: "GET",})
  .then((result) => result.json())  
  .then((data) => data ) 
  .catch((err) => {
   console.log(err)
	})
}

export { weatherApi }