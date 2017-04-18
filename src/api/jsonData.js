import axios from 'axios'
import store from '../store/batchStore'

export function getRecipe(){
	axios.get ('http://localhost:3001/recipes').then(recipes=>{
		store.dispatch({
			type: 'GET_RECIPE', 
			recipes: recipes.data
		})
	})
}

export function getSteps(){
	axios.get('http://localhost:3001/steps').then(steps=>{
		console.log(steps.data)
		store.dispatch({
			type:'GET_STEPS',
			steps: steps.data
		})
	})
}



export function getNotes(){
	axios.get('http://localhost:3001/notes').then(notes=>{
		store.dispatch({ 
		type:'GET_NOTES', 
		notes:notes.data
		})
	})
}
export function addRecipe(recipeName,createdBy,meal,prepTime,cookTime,cookTemp,tempType, servingAmount,servingType,photo){
	axios.post('http://localhost:3001/recipes',{
		recipeName, 
		createdBy, 
		meal,  
		prepTime, 
		cookTime,
		cookTemp,
		tempType,
		servingAmount,
		servingType,
		photo,
		

	}).then(res=>{
		// getRecipe()
	})
}

export function addSteps(stepId, ingredients, amount, unit, ingredient, ingredientItem, directions, recipeId){
	axios.post('http://localhost:3001/steps',{
		stepId, 
		ingredient, 
		directions,
		recipeId
		
	}).then(res=>{
		// getIngredients()
	})
}

export function addNotes(recipeId, id, note){
	axios.post('http://localhost:3001/notes',{
		recipeId, 
		note
	}).then(res=>{
		// getNotes()
	})
	
}

export function addUsers(createdBy, recipeId){
	axios.post('http://localhost:3001/users',{
		createdBy, 
		recipeId
	}).then(res=>{

	})

}

