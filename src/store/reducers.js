import { combineReducers } from 'redux'
import {decrease} from './reducer'

const rootReducer = combineReducers({
  decrease,
});

export default rootReducer;