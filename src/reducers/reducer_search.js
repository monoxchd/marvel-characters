import { SEARCH_CHARACTERS } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
		case SEARCH_CHARACTERS:
			console.log(action.payload);
			return action.payload;
		default:
			return state;
	}
}