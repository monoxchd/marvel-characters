import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, fetchPage, searchCharacters } from '../actions';

import CharactersList from '../components/CharactersList';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

class CharactersListContainer extends Component {
	constructor(props) {
		super(props);
		const { fetchCharacters, fetchPage } = this.props;
		/** the response is necessary for the second function call - renders load while not complete 
		fetchCharacters().then(response => fetchPage(response.payload.data.data.results));
		**/
		fetchCharacters().then(response => fetchPage(response.payload.data));
	}

	pageChange = page => {
		this.props.fetchPage(this.props.characters, page);
	}

	render() {
		const { pageList, currentPage, numberOfPages } = this.props.currentPage;
		return (
			<div>
				<Header />
				<div id="main-display" className="ui container">
					<div className="ui four stackable cards">
						<CharactersList characters={pageList} />				
					</div>		
				</div>
				<Pagination currentPage={currentPage} numberOfPages={numberOfPages} pageChange={this.pageChange} />
			</div>
		);
	}
}

function mapStateToProps({ characters, currentPage }) {
	return { characters, currentPage }
}

export default connect(mapStateToProps, { fetchCharacters, fetchPage, searchCharacters })(CharactersListContainer);