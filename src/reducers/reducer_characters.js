import { FETCH_CHARACTERS, SEARCH_CHARACTERS } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_CHARACTERS:
		/** payload specific to marvel characters 
			return action.payload.data.data.results;
		**/
			return action.payload.data;
		default:
			return state;
	}
}