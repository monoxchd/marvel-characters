import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import _ from 'lodash';

import CharactersListContainer from '../containers/CharactersListContainer';

class App extends Component {
	render() {
		return (
			<div className="app">

				<div className="ui red inverted top massive menu">
					<img className="ui image small" src={logo} />
					<div className="right menu">
						<div className="ui right aligned category search item">
							<div className="ui transparent icon input">
								<input className="prompt" type="text" placeholder="Search characters..." />
								<i className="search link icon"></i>
							</div>
						</div>
					</div>
				</div>

				<CharactersListContainer />
			</div>
		);
	}
}

export default App;