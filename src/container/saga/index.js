import { fork } from "redux-saga/effects"
import { weatherSaga } from "./weatherSaga"


export default function* rootSaga() {
    yield fork(weatherSaga)
  }