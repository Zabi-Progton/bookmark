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

		        <section id="content">

		            <div className="content-wrap">
		                <div className="container clearfix">
		                    <div className="col_one_third nobottommargin">
		                        <div className="well well-lg nobottommargin">
		                            <h3>Sign Up</h3>

		                            <div className="col_full">
		                                <input type="text" id="login-form-username" name="login-form-username" value="" placeholder="Username" className="form-control" />
		                            </div>

		                            <div className="col_full">
		                                <input type="text" id="login-form-phone" name="login-form-phone" value="" placeholder="Phone" className="form-control" />
		                            </div>

		                            <div className="col_full">
		                                <input type="password" id="login-form-password" name="login-form-password" value="" placeholder="password" className="form-control" />
		                            </div>

		                            <button>JOIN</button>

		                        </div>

		                    </div>

		                    <div className="col_two_third col_last nobottommargin">
		                        <h3>This is the Home Page</h3>
		                        {links}

		                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, vel odio non dicta provident sint ex autem mollitia dolorem illum repellat ipsum aliquid illo similique sapiente fugiat minus ratione.</p>
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
		profiles: state.profilesReducer.profilesArray

	}
}

export default connect(stateToProps)(Home)
