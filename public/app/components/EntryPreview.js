import React, { Component } from 'react'

class EntryPreview extends Component {

	render(){

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
                        <li><span className="label label-warning">Private</span></li>
                        <li><a href="#"><i className="icon-time"></i> 11:00 - 19:00</a></li>
                        <li><a href="#"><i className="icon-map-marker2"></i> Melbourne</a></li>
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