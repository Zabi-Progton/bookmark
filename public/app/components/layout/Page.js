import React, { Component } from 'react'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'
import EntryPreview from '../../components/EntryPreview'
import Header from '../../components/Header'


class Page extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {

		}
	}

	componentDidMount(){
		console.log('componentDidMount: '+this.props.params.username)

	}

	render(){

		var entriesList = null
		var entryArray = this.props.entries[this.props.params.username]
		if (entryArray != null){
			entriesList = entryArray.map(function(entry, i){
				return (
					<EntryPreview key={entry._id} entry={entry} />
				)
			})
		}



		return (
			<div>
				<Header />

		        <section id="content">

		            <div className="content-wrap">
		                <div className="container clearfix">

		                    <div className="col_two_third nobottommargin">
		                        <h3>Welcome To Bookmark!</h3>
		                        <div id="posts" className="events small-thumbs">
									{ entriesList }
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
	console.log('ENTRIES: '+JSON.stringify(state.entriesReducer.entries))
	return {
		entries: state.entriesReducer.entries,
		currentUser: state.accountReducer.currentUser
	}
}

export default connect(stateToProps)(Page)