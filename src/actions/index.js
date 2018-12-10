import axios from 'axios';
import md5 from 'md5';
import objToQueryString from './parsers';
import _ from 'lodash';

export const FETCH_CHARACTERS = 'fetch_characters';
export const SEARCH_CHARACTERS = 'search_characters';
export const FETCH_PAGE = 'fetch_page';

const ts = Date.now();

const queryString = objToQueryString({
	apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
	ts,
	hash: md5(`${ts}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`),
	limit: '100'
});

const ROOT_URL = 'https://gateway.marvel.com/v1/public/';

const PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/comments';

export function fetchCharacters() {
	/** use this function to call marvel characters 
	const request = axios.get(`${ROOT_URL}characters?${queryString}`);
	**/

	const request = axios.get(PLACEHOLDER_URL);

	return {
		type: FETCH_CHARACTERS,
		payload: request
	};
}

export function searchCharacters(list, term) {
	const filteredResults = _.filter(list, item => {
		return item.name.indexOf(term) > - 1;
	});

	return {
		type: SEARCH_CHARACTERS,
		payload: filteredResults
	}
}

export function fetchPage(list, currentPage = 1, numberPerPage = 16, numberOfPages = 0) {
	numberOfPages = Math.ceil(list.length / numberPerPage);
	const begin = ((currentPage - 1) * numberPerPage);
	const end = begin + numberPerPage;
	const pageList = list.slice(begin, end);
	const data = {
		currentPage,
		numberOfPages,
		list,
		pageList
	}

	return {
		type: FETCH_PAGE,
		payload: data 
	}
}