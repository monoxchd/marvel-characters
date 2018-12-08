import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, fetchPage } from '../actions';

import CharactersList from '../components/CharactersList';
import Pagination from '../components/Pagination';

class CharactersListContainer extends Component {
	componentWillMount() {
		const { fetchCharacters, fetchPage } = this.props;
		fetchCharacters().then(response => fetchPage(response.payload.data.data.results));
	}

	pageChange = page => {
		this.props.fetchPage(this.props.characters, page);
	}


	render() {
		console.log(this.props.characters, this.props.currentPage);
		const { list, pageList, currentPage, numberOfPages } = this.props.currentPage;
		return (
			<div className="ui container">
				<div className="ui four stackable cards">
					<CharactersList characters={pageList} />
				</div>
				<Pagination currentPage={currentPage} numberOfPages={numberOfPages} pageChange={this.pageChange} />
			</div>
		);
	}
}

function mapStateToProps({ characters, currentPage }) {
	return { characters, currentPage }
}

export default connect(mapStateToProps, { fetchCharacters, fetchPage })(CharactersListContainer);