import {createStore} from 'redux'
import batchReducer from '../reducers/batchReducer'

const store = createStore(batchReducer)

export default store