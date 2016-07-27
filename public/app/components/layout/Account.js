import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import APIManager from '../../utils/APIManager'
import Dropzone from 'react-dropzone'
import store from '../../stores/store'
import actions from '../../actions/actions'

class Account extends Component {

	constructor(props, context){
		super(props, context)
		this.submitUpdate = this.submitUpdate.bind(this)
		this.updateUser = this.updateUser.bind(this)
		this.uploadProfileImage = this.uploadProfileImage.bind(this)
		this.state = {
			user: {
				username:'',
			}
		}
	}

	componentWillMount(){
		console.log('componentWillMount: ')
		var userCopy = Object.assign({}, this.props.currentUser)

		this.setState({
			user: userCopy
		})
	}

	updateUser(event){
		event.preventDefault()
//		console.log('updateUser: ')
		var updated = Object.assign({}, this.state.user)
		updated[event.target.id] = event.target.value
		
		this.setState({
			user: updated
		})
	}

	uploadProfileImage(files){
		var _this = this
		APIManager.upload(files[0], function(err, response){
			if (err){
				alert(err.message)
				return
			}

//			console.log(JSON.stringify(response))
			var updated = Object.assign({}, _this.state.user)
			updated['image'] = response.id
			
			_this.setState({
				user: updated
			})
		})
	}

	submitUpdate(event){
		event.preventDefault()
		
		var endpoint = '/api/profile/'+this.state.user._id
		APIManager.handlePut(endpoint, this.state.user, function(err, response){
			if (err){
				alert(err.message)
				return
			}

//			alert('Update Successful!')
			store.currentStore().dispatch(actions.currentUserReceived(response.result))
		})
	}

	render(){
		var img = (this.props.currentUser.image.length == 0) ? null : <img style={{width:110, borderRadius:55}} src={'https://media-service.appspot.com/site/images/'+this.props.currentUser.image+'?crop=220'} />

		return (
			<div>
				<Header />
		        <section id="content">

		            <div className="content-wrap">
		                <div className="container clearfix">

		                    <div className="col_two_third nobottommargin">
		                    	
		                    	{img}
		                        <h3>Welcome {this.props.currentUser.username}</h3>

			                    <input onChange={this.updateUser} value={this.state.user.username} type="text" id="username" placeholder="Username" className="form-control" /><br />
			                    <input onChange={this.updateUser} value={this.state.user.phone} type="text" id="phone" placeholder="Phone Number" className="form-control" /><br />
			                    <Dropzone onDrop={this.uploadProfileImage}>
			                    	{ (this.state.user.image.length==0) ? 
			                    		null
			                    		:
			                    		<img src={'https://media-service.appspot.com/site/images/'+this.state.user.image+'?crop=64'} /> 
			                    	}

			                    	Drag & Drop image here
			                    </Dropzone>
			                    <br />

			                    <button onClick={this.submitUpdate}>Update</button>

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