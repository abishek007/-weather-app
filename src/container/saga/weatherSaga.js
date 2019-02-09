import { put, call, takeEvery, select } from "redux-saga/effects"
import { cityData } from "../actions"
import { weatherApi } from "../api"
import { getFormValues } from "redux-form"

export function* weatherData(action) {
	const formData = yield select(getFormValues("WEATHER_APP"))
  const response = yield call(weatherApi, formData.weatherCity)
	if (response) {
		yield put(cityData.success(response))
	}
}

export function* weatherSaga() {
  yield takeEvery(cityData.REQUEST, weatherData)
}
