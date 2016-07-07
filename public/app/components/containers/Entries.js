import React, { Component } from 'react'
import EntryPreview from '../../components/EntryPreview'
import APIManager from '../../utils/APIManager'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'

class Entries extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {

		}
	}

	componentDidMount(){
		console.log('Component Did Mount: '+JSON.stringify(this.props.entries))
		// if (this.props.entries.length > 0) // already there
		// 	return

		var entryArray = this.props.entries[this.props.params.phone]
		if (entryArray != null){ // already there
 			return
		}

		var _this = this
		APIManager.handleGet('/api/entry', {phone:this.props.params.phone}, function(err, response){
			if (err){
				alert(err)
				return
			}

			store.dispatch(actions.entriesReceived(response.results))
		})
	}

	render(){
		var entryArray = this.props.entries[this.props.params.phone]
		var entryList = null
		if (entryArray != null){
			entryList = entryArray.map(function(entry, i){
				return <EntryPreview key={entry._id} entry={entry} />
			})
		}


		return (
			<div>

				{entryList}

			</div>
		)
	}
}

const stateToProps = function(state){
	return {
		entries: state.entriesReducer.entries
	}

}

export default connect(stateToProps)(Entries)












