import React from 'react';
import RecipesList from './recipesList'
import Steps from './steps'
import stepsCss from '../style/steps.css'

import recipeCss from '../style/recipeList.css'
// import Notes from './notes'
import store from '../store/batchStore'
import {Provider} from 'react-redux'




export default React.createClass({
  render() {
    return (

    
    	<Provider store={store}>
	    	<div>
	      		<RecipesList />
	      	</div>
      	</Provider>
       
      
    )
  }
})