import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {

	render(){
		return (
			<div>
				This is the Home Page<br />
				<Link to="/entries/2037227160">Dan Kwon</Link><br />
				<Link to="/entries/9178736517">Elise Harris</Link><br />
			</div>
		)
	}
}

export default Home