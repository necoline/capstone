import React from 'react';


class ParkerBio extends React.Component {

	show() {
		return (
			<div style={{ color: 'white' }}>
				Parker is a 2 meter tall geek who loves programming in React.  He has an affinity for aesthetically pleasing code and insightful improvements.  He loves gaming in all its forms and stick figures by CGP Grey and XKCD.  After an amazing year of teaching at DevPoint Labs, he is moving on to exciting new adventures in coding.
			</div>
		);
	}

	hide() {
		return (
			<div style={{ display: 'none' }}>Easter Egg!!!</div>
		);
	}

	render() {
		if (this.props.show)
			return this.show();
		else
			return this.hide();
	}
}

export default ParkerBio;
