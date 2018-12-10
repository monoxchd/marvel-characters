import React from 'react';
import placeholder from '../assets/img/card-placeholder.png';
import _ from 'lodash';

export default (props) => {
	if (!props.characters) {
		return (
			<div className="ui active page dimmer">
				<div className="ui active dimmer">
					<div className="ui text loader">Loading</div>
				</div>
				<p></p>
			</div>
		);
	}
	return _.map(props.characters, character => {
		return (
			/**  function for marvel characters - properties in json
			<div className="ui red raised link card" key={character.id}>
				<div className="image">
					<img src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`} />
				</div>
				<div className="content">
					<a className="header">{character.name}</a>
					<div className="ui divider" />
					<div className="description">
						{character.description === '' ? 'No Bio' : character.description }
					</div>
				</div>
			</div>	
			**/
			<div className="ui red raised link card" key={character.id}>
				<div className="image">
					<img src={placeholder} />
				</div>
				<div className="content">
					<a className="header">{character.name}</a>
					<div className="ui divider" />
					<div className="description">
						{character.body === '' ? 'No Bio' : character.body }
					</div>
				</div>
			</div>		
		);
	});
}