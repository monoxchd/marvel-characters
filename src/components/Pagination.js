import React, { Component } from 'react';

const Pagination = props => {
	const { currentPage, numberOfPages, pageChange } = props;
	return (
		<nav>
			<div className="four ui buttons">
				<button className={`ui left labeled icon button ${currentPage === 1 ? 'disabled' : ''}`} onClick={ () => pageChange(1) }>First<i className="angle double left icon"></i></button>
				<button className={`ui left labeled icon button ${currentPage === 1 ? 'disabled' : ''}`} onClick={ () => pageChange(currentPage - 1) } >Prev<i className="chevron left icon"></i></button>
				<button className={`ui right labeled icon button ${currentPage === numberOfPages ? 'disabled' : ''}`} onClick={ () => pageChange(currentPage + 1)}>Next<i className="chevron right icon"></i></button>
				<button className={`ui right labeled icon button ${currentPage === numberOfPages ? 'disabled' : ''}`} onClick={ () => pageChange(numberOfPages) }>Last<i className="angle double right icon"></i></button>
			</div>
		</nav>
	);
}

export default Pagination;