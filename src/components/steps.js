import React from 'react'
import{addSteps} from '../api/jsonData'
import{getIngredients} from '../api/jsonData'
import {connect} from 'react-redux'



var input = document.getElementById('inputbox');

const Steps = React.createClass({

	getInitialState(){
		return{
			stepId:1,
			ingredientId:1,
			recipeId:1,
			amount:"", 
			unit:"",
			ingredient:[],
			ingredients:"", 
			// recipeId:1, 
			directions:"",
		}
	},
	componentWillMount(){
		getIngredients()
	},


	onClick(){
		this.state.ingredient.push(this.state.ingredientId, this.state.amount, this.state.unit, this.state.ingredients, this.state.directions, this.state.recipeId )

		this.setState({
			ingredientId:this.state.ingredientId + 1,	
			amount:"", 
			unit:"",
			ingredients:"",
			directions:"",
			
		})

	},



	update(e){
		this.setState({[e.target.name]: e.target.value})
	}, 

	handleSubmit(e){
		e.preventDefault()

		addSteps(this.state.stepId, this.state.ingredients,this.state.amount, this.state.unit, this.state.ingredient, this.state.ingredientItem, this.state.directions, this.state.recipeId, )

		this.setState({
			stepId:this.state.stepId + 1,
			// recipeId:this.state.recipeId + 1, 	
		})
	},


	render(){
		console.log(this.state.ingredient)
		// console.log(this.state.id)
		return(
			<div>
			
			<form id="inputbox" onSubmit={this.handleSubmit}>


				<input  name="amount" onChange={this.update} type="text" placeholder="Amount" value={this.state.amount}/>


				<select id="content" name="unit" onChange={this.update}>
		            <option value={this.state.unit}>Cup</option>
		            <option value={this.state.unit}>OZ</option>
		            <option value={this.state.unit}>tbs</option>
		            <option value={this.state.unit}>tsp</option>
          		</select>

          		<input name="ingredients" onChange={this.update} type="text" placeholder="Ingredient" value={this.state.ingredients}/>


          		<textarea rows="4" cols="50" name="directions" onChange={this.update} placeholder="Directions that go with this step" value={this.state.directions}>
          		</textarea>



          		 <button type="button" id="submit" onClick={this.onClick}>Add Ingredient</button>

          		  <button type="submit" onSubmit={this.handleSubmit}>Submit Steps</button>

				</form>
			</div>
		)
	}
})

function mapStateToProps (appState){
  return{steps:appState.steps}
}
export default connect(mapStateToProps)(Steps)