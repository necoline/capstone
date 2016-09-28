import React from 'react';

class NecoBio extends React.Component {

	show() {
		return (
			<div style={{ color: 'white' }}>
				Necoline Hubner has a background in International Affairs and Linguistics but has found a new love in frontend development. 
				DevPoint Labs has provided the perfect environment for jumping into the world of code where she has been able to actualize 
				her ambitions in the realm of visual data. Necoline looks forward to develop her skill sets as she steps into post-grad life.
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

export default NecoBio;