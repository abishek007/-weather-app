import { createSignalAction } from "./helper"

export const SELECTED_CITY = "SELECTED_CITY"

export const cityData = createSignalAction("SELECTED_CITY", "FETCH_WEATHER_DATA")
