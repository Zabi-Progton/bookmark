import React, { Component } from 'react'
import DateUtils from '../utils/DateUtils'
import { Link } from 'react-router'

class EntryPreview extends Component {

	render(){
        var username = null
        var profileLink = null
        if (this.props.entry.profile.username == null){
            username = 'Anonymous'
            profileLink = <a href="#"><i className="icon-user"></i> 'Anonymous'</a>
        }
        else {
            username = this.props.entry.profile.username
            profileLink = <Link to={'/page/'+username}> {username}</Link>
        }

		var imageUrl = (this.props.entry.image.length == 0) ? '/images/events/thumbs/1.jpg' : this.props.entry.image
		return (

            <div className="entry clearfix">
                <div className="entry-image hidden-sm">
                    <a target="_blank" href={this.props.entry.url}>
                        <img src={imageUrl} alt="Bookmark" />
                    </a>
                </div>
                <div className="entry-c">
                    <div className="entry-title">
                        <h2><a target="_blank" href={this.props.entry.url}>{this.props.entry.title}</a></h2>
                    </div>
					<p>{this.props.entry.description}</p>
                    <ul className="entry-meta clearfix">
                        <li><a href="#"><i className="icon-time"></i> {DateUtils.formattedDate(this.props.entry.timestamp)}</a></li>
                        <li>{profileLink}</li>
                    </ul>
                    <div className="entry-content">
                        <a target="_blank" href={this.props.entry.url} className="btn btn-danger">Read More</a>
                    </div>
                </div>
            </div>	

		)
	}
}

export default EntryPreview