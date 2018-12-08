import React from 'react';
import placeholder from '../assets/img/card-placeholder.png';
import _ from 'lodash';

export default (props) => {
	return _.map(props.characters, character => {
		return (
			<div className="ui red raised link card" key={character.id}>
				<div className="image">
					<img src={placeholder} />
				</div>
				<div className="content">
					<a className="header">{character.name}</a>
					<div className="ui divider" />
					<div className="description">
						{character.body}
					</div>
				</div>
			</div>		
		);
	});
}