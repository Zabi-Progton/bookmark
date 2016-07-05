import React, { Component } from 'react'

class EntryPreview extends Component {

	render(){
		return (
			<div style={{background:'#f9f9f9', border:'1px solid #ddd', padding:16, marginBottom:12}}>
				<img style={{width:120}} src={this.props.entry.image} />
				<h3>{this.props.entry.title}</h3>
				<a style={{textDecoration:'none'}} target="_blank" href={this.props.entry.url}>{this.props.entry.url}</a>
				<p>{this.props.entry.description}</p>
			</div>
		)
	}
}

export default EntryPreview