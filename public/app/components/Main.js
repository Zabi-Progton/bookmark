import React, { Component } from 'react'
import Entries from '../components/containers/Entries'

class Main extends Component {

	render(){
		return (
			<div>
				Welcome to Bookmark!
				<Entries />
			</div>
		)
	}
}

export default Main