import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {

	render(){
		return (
			<div>
				This is the Home Page<br />
				<Link to="/entries/123">Entries</Link>
			</div>
		)
	}
}

export default Home