const Initialstate = {
	recipes:[], 
	
	

}

export default function batchReducer(state = Initialstate, action){
	switch(action.type){
		case 'GET_RECIPE':
			return{
				...state,
				recipes:action.recipes
			}
			default: 
				return state
	}
}