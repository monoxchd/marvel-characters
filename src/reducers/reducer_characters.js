import { FETCH_CHARACTERS } from '../actions';
import _ from 'lodash';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_CHARACTERS:
			return action.payload.data.data.results;
		default:
			return state;
	}
}