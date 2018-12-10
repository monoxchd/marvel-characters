import { FETCH_PAGE } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_PAGE:
			return action.payload;
		default:
			return state;
	}
}