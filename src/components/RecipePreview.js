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
			<div className="creatorTitle"><p>TITLE</p><p>createdBy</p></div>
    		<div className="imageContainer"></div>
    		
    			

    		<div className="recipeStats">
				<ul>
					<li>.type</li>
					<li>.prepTime</li>
					<li>.cookTime</li>
					<li>.cookTemp</li>
				</ul>
    		</div>

    		<div className="recipeCard">
    			<div className="previewTitleBar">Title Bar</div>
    			<div className="lineIngredient">
					<ul>
						<li>ingamo</li>
						<li>ing</li>
					</ul>
				</div>
    		</div>
  			

    		
    		<div className="steps">
				 <div className="stepNumberHR">Step #</div>

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