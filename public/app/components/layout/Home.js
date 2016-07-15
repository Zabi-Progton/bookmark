import React, { Component } from 'react'
import { Link } from 'react-router'
import APIManager from '../../utils/APIManager'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Register from '../../components/Register'


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
		                    	<Register />
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
