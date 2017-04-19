import React from 'react';
import RecipesList from './recipesList'
import MakeRecipe from './MakeRecipe'
//import Steps from './steps'
import stepsCss from '../style/steps.css'
import recipeCss from '../style/recipeList.css'
// import Notes from './notes'
import store from '../store/batchStore'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import RecipePreview from './RecipePreview'




export default React.createClass({
  render() {
    return (

    	
    	<Provider store={store}>
    	<Router>
	    	<div id="container">
	    		<Route exact={true} path="/" component={MakeRecipe}/> 
	    		<Route path="/recipe/:recipeId" component={RecipePreview} />
	    		
	      		
	      	</div>
	    </Router>
      	</Provider>
       
      
    )
  }
})