import React, { Component } from 'react'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'


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
		return (
			<div>
				This is the Page Component!
			</div>
		)
	}
}

const stateToProps = function(state){
	return {
		entries: state.entriesReducer.entriesArray,
		currentUser: state.accountReducer.currentUser
	}
}

export default connect(stateToProps)(Page)