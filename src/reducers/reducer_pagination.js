import { FETCH_PAGE } from '../actions';
import _ from 'lodash';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_PAGE:
			return action.payload;
		default:
			return state;
	}
}