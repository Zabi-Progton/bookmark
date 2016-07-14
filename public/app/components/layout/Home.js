import React, { Component } from 'react'
import { Link } from 'react-router'
import APIManager from '../../utils/APIManager'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'
import Header from '../../components/Header'


class Home extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {

		}
	}

	componentDidMount(){
		console.log('componentDidMount: ')
		if (this.props.profiles.length > 0)
			return
		
		var _this = this
		APIManager.handleGet('/api/profile', null, function(err, response){
			if (err){
				alert(err)
				return
			}

			// console.log(JSON.stringify(response))
			// _this.setState({
			// 	profiles: response.results
			// })

			store.currentStore().dispatch(actions.profilesReceived(response.results))
		})
	}

	render(){
		var links = this.props.profiles.map(function(profile, i){
			return (
				<div key={profile._id}>
					<Link to={'/entries/'+profile.phone}>{profile.phone}</Link>
				</div>
			)

		})
		return (
			<div>
				<Header />
				This is the Home Page<br />
				{links}
			</div>
		)
	}
}

const stateToProps = function(state){
	return {
		profiles: state.profilesReducer.profilesArray

	}
}

export default connect(stateToProps)(Home)
