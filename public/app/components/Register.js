import React, { Component } from 'react'

class Register extends Component {

	constructor(props, context){
		super(props, context)
		this.toggleMode = this.toggleMode.bind(this)
		this.state = {
			mode: 'register' // register or login
		}
	}

	toggleMode(event){
		event.preventDefault()

		var currentMode = this.state.mode
		var nextMode = (currentMode == 'register') ? 'login' : 'register'
		console.log('Toggle Mode: '+nextMode)
		this.setState({
			mode: nextMode
		})
	}


	render(){
		var btnText = null
		var phoneField = null
		if (this.state.mode == 'register'){
			btnText = 'Join'
			phoneField = <input type="text" style={{marginTop:22}} id="login-form-phone" name="login-form-phone" value="" placeholder="Phone" className="form-control" />
		}
		else {
			btnText = 'Log In'
		}

		return (
            <div className="well well-lg nobottommargin">
                <h3>{ this.state.mode.toUpperCase() }</h3>
                <hr style={{borderTop:'1px solid #777'}} />
                <div className="col_full">
                    <input type="text" id="login-form-username" name="login-form-username" value="" placeholder="Username" className="form-control" />
                    {phoneField}
                    <input type="password" style={{marginTop:22}} id="login-form-password" name="login-form-password" value="" placeholder="password" className="form-control" />
                </div>
                <button className="button button-xlarge button-border button-rounded tright">{btnText}</button><br />
                Already a member? Login <a onClick={this.toggleMode} href="#">HERE</a>.
                <br />

            </div>
		)
	}
}

export default Register