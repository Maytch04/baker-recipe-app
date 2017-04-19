import React from 'react'
import {connect} from 'react-redux'


const Notes = React.createClass({
	getInitialState(){
		return{
			id:1,
			recepieId:1,
			note:'',
			
		
	}, 

	componentWillMount(){
		// getNotes()
	}, 

	update(e){
		this.setState({[e.target.name]: e.target.value})
	},

	handleSubmit(e){
		e.preventDefault()
		addNotes(this.state.note)


    this.setState({
    	id: this.state.id + 1,
    	recipeId:this.state.recipeId + 1,
      	notes:''
    		})
		},

	





	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
				<textarea name="note" onChange={this.update} placeholder="" value={this.state.note}>
          		</textarea>
			</form>
			</div>
		)
	}
})

function mapStateToProps (appState){
	return{note:appState.note}
}

export default connect (mapStateToProps)(Notes)