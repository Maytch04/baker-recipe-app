import React from 'react'
import{addSteps} from '../api/jsonData'
import{getSteps} from '../api/jsonData'
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
		getSteps()
	},


	onClick(){
		
		const ingArray={
		"ingredientId":this.state.ingredientId, 
		"amount":this.state.amount, 
		"unit":this.state.unit, 
		"ingredients":this.state.ingredients, 
		}


		this.state.ingredient.push(ingArray)

		this.setState({
			ingredientId:this.state.ingredientId + 1,	
			amount:"", 
			unit:"",
			ingredients:"",
			
			
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
			ingredient:[],
			directions:"",
			// recipeId:this.state.recipeId + 1, 	
		})
	},


	render(){
		console.log(this.state.ingredient)
		// console.log(this.state.id)
		return(
			<div>
			
			<form id="inputbox" onSubmit={this.handleSubmit}>

				<div className="ingredients">
					<input  name="amount" onChange={this.update} type="text" placeholder="Amount" value={this.state.amount}/>

					<input  name="unit" onChange={this.update} type="text" placeholder="Unit" value={this.state.unit}/>


	          		<input name="ingredients" onChange={this.update} type="text" placeholder="Ingredient" value={this.state.ingredients}/>

	          		

	          		
	          		 <button className="addIngredient"type="button" id="submit" onClick={this.onClick}>Add Ingredient</button>

	          		  
	          		
          		  </div>
          		  <div >
	          		<textarea className="directions" name="directions" onChange={this.update} placeholder="Directions that go with this step" value={this.state.directions}>
	          		</textarea>

	          		<button className="submit"type="submit" onSubmit={this.handleSubmit}>Submit Step</button>
	          	  </div>
				</form>
			</div>
		)
	}
})

function mapStateToProps (appState){
  return{steps:appState.steps}
}
export default connect(mapStateToProps)(Steps)