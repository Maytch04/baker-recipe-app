import React from 'react';
import Recipe from './Recipe'
//import Steps from './steps'
import stepsCss from '../style/steps.css'
import allrecipesCss from '../style/AllRecipes.css'
import recipeCss from '../style/recipeList.css'
import previewStyle from '../style/recipePreview.css'
// import Notes from './notes'
import store from '../store/batchStore'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RecipePreview from './RecipePreview'
import AllRecipes from './AllRecipes'




export default React.createClass({
  render() {
    return (

    	
    	<Provider store={store}>
    	<Router>
	    	<div id="container">
					<AllRecipes />
	    		<Route exact={true} path="/" component={AllRecipes}/> 
					<Route exact={true} path="/recipe" component={Recipe} />
	    		<Route path="/recipe/:recipeId" component={RecipePreview} />
	    	
	      		
	      	</div>
	    </Router>
      	</Provider>
       
      
    )
  }
})