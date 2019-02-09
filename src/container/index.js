import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { cityData } from "./actions"

function mapStateToProps(state) {
	const {
		main,
		name,
		weather,
	} = state.weatherAppReducer.weather || {}
	const { temp: temparature, humidity } = main || {}
	const { main: condition } = weather ? weather[0] : {}
  return {
		name,
		temparature,
		humidity,
		condition,
	}
}
  
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		cityDataRequest: cityData.request,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)