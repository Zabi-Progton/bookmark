import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'


class Account extends Component {

	constructor(props, context){
		super(props, context)
		this.updateUser = this.updateUser.bind(this)
		this.state = {
			user: {
				username:'',
			}

		}

	}

	componentDidMount(){
		var userCopy = Object.assign({}, this.props.currentUser)
		console.log('componentDidMount: '+JSON.stringify(userCopy))

		this.setState({
			user: userCopy
		})
	}

	updateUser(event){
		event.preventDefault()
		console.log('updateUser: ')
		var updated = Object.assign({}, this.state.user)
		updated[event.target.id] = event.target.value
		
		this.setState({
			user: updated
		})

	}

	render(){
		return (
			<div>
				<Header />
		        <section id="content">

		            <div className="content-wrap">
		                <div className="container clearfix">

		                    <div className="col_two_third nobottommargin">
		                        <h3>Welcome {this.props.currentUser.username}</h3>

			                    <input onChange={this.updateUser} value={this.state.user.username} type="text" id="username" name="login-form-username" placeholder="Username" className="form-control" />

		                        <div id="posts" className="events small-thumbs">

		                        </div>
		                    </div>



		                </div>
		            </div>
		        </section>
			</div>
		)
	}
}

const stateToProps = function(state){
	return {
//		profiles: state.profilesReducer.profilesArray
		currentUser: state.accountReducer.currentUser

	}
}

export default connect(stateToProps)(Account)