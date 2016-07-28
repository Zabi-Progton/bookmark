import React, { Component } from 'react'

class Page extends Component {

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

export default Page