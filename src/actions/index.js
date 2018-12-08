import axios from 'axios';
import md5 from 'md5';
import objToQueryString from './parsers';

export const FETCH_CHARACTERS = 'fetch_characters';
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
	const request = axios.get(`${ROOT_URL}characters?${queryString}`);

	return {
		type: FETCH_CHARACTERS,
		payload: request
	};
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