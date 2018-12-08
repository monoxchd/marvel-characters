import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters, fetchPage } from '../actions';

import CharactersList from '../components/CharactersList';

class CharactersListContainer extends Component {
	componentWillMount() {
		const { fetchCharacters, fetchPage } = this.props;
		fetchCharacters().then(response => fetchPage(response.payload.data));
	}


	render() {
		console.log(this.props.currentPage);
		return (
			<div className="ui container">
				<div className="ui four cards">
					<CharactersList characters={this.props.currentPage} />
				</div>
			</div>
		);
	}
}

function mapStateToProps({ characters, currentPage }) {
	return { characters, currentPage }
}

export default connect(mapStateToProps, { fetchCharacters, fetchPage })(CharactersListContainer);