import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPage, searchCharacters } from '../actions';
import logo from '../assets/img/logo.png';

class Header extends Component {
	state = { term: '' };

	onSearchInputChange = e => {
		this.setState({term: e.target.value});
	}

	searchSubmit = e => {
		e.preventDefault();
		this.props.searchCharacters(this.props.characters, this.state.term);
		this.props.fetchPage(this.props.searchList);
	}

	render() {
		return (
			<div className="ui red inverted top massive fixed menu">
				<img className="ui image small" src={logo} alt="Marvel Logo" />
				<div className="right menu">
					<div className="ui right aligned category search item">
						<div className="ui transparent icon input">
							<form onSubmit={this.searchSubmit}>
								<input 
									className="prompt" 
									type="text" 
									placeholder="Search characters..." 
									value={this.state.term}
									onChange={this.onSearchInputChange}
								/>
								<i className="search link icon"></i>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ characters, searchList }) {
	return { characters, searchList };
}

export default connect(mapStateToProps, { fetchPage, searchCharacters })(Header);