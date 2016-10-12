import React from 'react';

// const JohnBio = (show) => (

// )

class JohnBio extends React.Component {

	show() {
		return (
			<div className="fSize" style={{ color: 'white' }}>
				John Amador is a customer service and technical support expert. He is currently Director of Tehnical Support for
				iSolved software. He is also member of the the Senior Leadership Team and helps drive the direction of the company.
				John's went to school for graphic arts and web design. His newly added skills with Javascript, html, and css will 
				help him complete his skill set and move in to development with his present company.
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

export default JohnBio;
