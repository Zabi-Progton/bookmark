import constants from '../constants/constants'

var initialState = {
	profiles: {},
	profilesArray: []
}

export default function(state = initialState, action){
	switch (action.type) {

		case constants.PROFILES_RECEIVED:
			var profiles = action.profiles
			console.log('PROFILES_RECEIVED: '+JSON.stringify(profiles))
			var newState = Object.assign({}, state)
			newState['profilesArray'] = profiles

			return newState

		default:
			return state
	}

}