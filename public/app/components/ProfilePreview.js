import React, { Component } from 'react'
import { Link } from 'react-router'

class ProfilePreview extends Component {

	render(){

		return (
            <div className="well well-lg nobottommargin">
                <h3>Welcome {this.props.profile.username}</h3>
                <hr style={{borderTop:'1px solid #777'}} />
                <Link to="/account" className="button button-xlarge button-border button-rounded tright">View Account</Link>
                <br /><br />
            </div>
		)
	}
}

export default ProfilePreview