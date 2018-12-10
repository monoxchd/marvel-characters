import { combineReducers } from 'redux';
import CharactersReducer from './reducer_characters';
import PaginationReducer from './reducer_pagination';
import SearchReducer from './reducer_search';

const rootReducer = combineReducers({
	characters: CharactersReducer,
	currentPage: PaginationReducer,
	searchList: SearchReducer
});

export default rootReducer;