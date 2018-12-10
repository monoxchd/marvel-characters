import React, { Component } from 'react';

import CharactersListContainer from '../containers/CharactersListContainer';

class App extends Component {
	render() {
		return (
			<div className="app">
				<CharactersListContainer />
			</div>
		);
	}
}

export default App;