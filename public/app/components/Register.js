import React, { Component } from 'react'

class Register extends Component {

	constructor(props, context){
		super(props, context)
		this.toggleMode = this.toggleMode.bind(this)
		this.updateVisitor = this.updateVisitor.bind(this)
		this.state = {
			mode: 'register', // register or login
			visitor: {
				username: '',
				phone: '',
				password: ''
			}
		}
	}

	updateVisitor(event){
		console.log(event.target.id+' = '+event.target.value)

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
			phoneField = <input type="text" onChange={this.updateVisitor} style={{marginTop:22}} id="phone" name="login-form-phone" placeholder="Phone" className="form-control" />
		}
		else {
			btnText = 'Log In'
		}

		return (
            <div className="well well-lg nobottommargin">
                <h3>{ this.state.mode.toUpperCase() }</h3>
                <hr style={{borderTop:'1px solid #777'}} />
                <div className="col_full">
                    <input type="text" onChange={this.updateVisitor} id="username" name="login-form-username" placeholder="Username" className="form-control" />
                    {phoneField}
                    <input type="password" onChange={this.updateVisitor} style={{marginTop:22}} id="password" name="login-form-password" placeholder="password" className="form-control" />
                </div>
                <button className="button button-xlarge button-border button-rounded tright">{btnText}</button><br />
                Already a member? Login <a onClick={this.toggleMode} href="#">HERE</a>.
                <br />

            </div>
		)
	}
}

export default Register