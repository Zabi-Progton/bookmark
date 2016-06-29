import constants from '../constants/constants'

export default {

	entriesReceived: function(entries){
//		console.log('entriesReceived: '+JSON.stringify(entries))
		return {
			type: constants.ENTRIES_RECEIVED,
			entries: entries
		}
	}

}