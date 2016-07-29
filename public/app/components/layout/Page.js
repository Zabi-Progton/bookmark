import React, { Component } from 'react'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'
import EntryPreview from '../../components/EntryPreview'


class Page extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {

		}
	}

	componentDidMount(){
		console.log('componentDidMount: '+this.props.params.username)

	}

	render(){

		var entriesList = null
		var entryArray = this.props.entries[this.props.params.username]
		if (entryArray != null){
			entriesList = entryArray.map(function(entry, i){
				return (
					<EntryPreview key={entry._id} entry={entry} />
				)
			})
		}



		return (
			<div>
				This is the Page Component!
				{ entriesList }
			</div>
		)
	}
}

const stateToProps = function(state){
	console.log('ENTRIES: '+JSON.stringify(state.entriesReducer.entries))
	return {
		entries: state.entriesReducer.entries,
		currentUser: state.accountReducer.currentUser
	}
}

export default connect(stateToProps)(Page)