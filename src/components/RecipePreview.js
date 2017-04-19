import React from 'react'
import{getRecipes} from '../api/jsonData'
import{getSteps} from '../api/jsonData'
import{getNotes} from '../api/jsonData'
import{getUsers} from '../api/jsonData'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

const Preview = React.createClass({
	componentWillMount(){
		getSteps(),
		getRecipes(),
		getNotes(), 
		getUsers()
	}, 

  render() {
  		
    return (

    	<div className="previewContainer">

    		{this.props.recipes.map(recipe=>(
    		<div>
    			<p>{recipe.createdBy}</p>
    		

    		<div className="imageContainer"></div>
    		

    		<div className="recipeStats">
    			<div className="type">{recipe.meal}</div>
    			<div className="prepTime">{recipe.prepTime}</div>
    			<div className="cookTime">{recipe.cookTime}</div>
    			<div className="cookTemp">{recipe.cookTemp} {recipe.tempType}</div>
    		</div>

    		<div className="recipeCard">
    			<div className="titleBar">{recipe.servingAmount}</div>
    		
    		
    			<div className="lineIngredient">
	    			<div className="ingredietAmount">ingredient amount</div>
	    			<div className="ingredient">ingredient</div>
    			</div>
    		</div>
			</div>
  			))}

    		<div className="stepNumberHR">Step #</div>
    		<div className="steps">
    			<div className="directions">directions</div>
    			<div className="amount">amount</div>
    			<div className="ingredient"> ingredient for stems</div>
    		</div>

    		<div className="notes">Personal Notes</div>
    		
    		
    	</div>
    )
  }
})

function mapStateToProps (appState){
	
	return{steps:appState.steps, recipes:appState.recipes, notes:appState.notes, users:appState.users}
}
export default connect(mapStateToProps)(Preview)