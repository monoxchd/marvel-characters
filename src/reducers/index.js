import { combineReducers } from 'redux';
import CharactersReducer from './reducer_characters';
import PaginationReducer from './reducer_pagination';

const rootReducer = combineReducers({
	characters: CharactersReducer,
	currentPage: PaginationReducer
});

export default rootReducer;