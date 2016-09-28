import React from 'react';

class CameronBio extends React.Component {

	show() {
		return (
			<div style={{ color: 'white' }}>
				Cameron Packer - Technical Support Professional and JavaScript Developer.
				I love to be outside, but coding is my passion. I love being able to make wonder and amazing software that can better peoples lives. 
				I aspire to be a full stack developer some day and plan to make some amazing software!
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

export default CameronBio;
