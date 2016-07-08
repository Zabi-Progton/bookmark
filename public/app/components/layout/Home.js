import React, { Component } from 'react'
import { Link } from 'react-router'
import APIManager from '../../utils/APIManager'

class Home extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			profiles: []
		}
	}

	componentDidMount(){
		console.log('componentDidMount: ')
		var _this = this
		APIManager.handleGet('/api/profile', null, function(err, response){
			if (err){
				alert(err)
				return
			}

			console.log(JSON.stringify(response))
			_this.setState({
				profiles: response.results
			})

//			store.dispatch(actions.entriesReceived(response.results))
		})

	}

	render(){
		var links = this.state.profiles.map(function(profile, i){
			return (
				<div key={i}>
					<Link to={'/entries/'+profile.phone}>{profile.phone}</Link>
				</div>
			)

		})
		return (
			<div>
				This is the Home Page<br />
				{links}
			</div>
		)
	}
}

export default Home