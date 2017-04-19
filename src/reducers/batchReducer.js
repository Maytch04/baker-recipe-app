const Initialstate = {
	recipes:[],
	steps:[], 
	notes:[], 
	ingredients:[],
	users:[] 
}


export default function batchReducer(state = Initialstate, action){
	switch(action.type){
		case 'GET_RECIPES':
			return{
				...state,
				recipes:action.recipes
			}
			
		case 'GET_STEPS':
			return{
				...state, 
				steps:action.steps,
				ingredient:action.steps.ingredient

			}

		case 'GET_NOTES':
			return{
				...state,
				notes:action.notes
			}
		case 'GET_USERS':
			return{
				...state, 
				users:action.users
			}
		default:
			return state
	}
}