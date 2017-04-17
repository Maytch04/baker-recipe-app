import React from 'react';
import RecipesList from './recipesList'
import Steps from './steps'
// import Notes from './notes'
import store from '../store/batchStore'
import {Provider} from 'react-redux'
//import injectTapEventPlugin from 'react-tap-event-plugin';

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