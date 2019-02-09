import * as actions from "../actions"

const initialState = {
  weather: {},
}

const weatherAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.cityData.SUCCESS:
    case actions.cityData.FAILURE:
      return {...state, weather: action.data}
    default:
    return state 
  }
}

export default weatherAppReducer