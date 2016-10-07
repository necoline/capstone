import React from 'react';

class CameronBio extends React.Component {

	show() {
		return (
			<div className="fSize" style={{ color: 'white' }}>
				Cameron Packer - Technical Support Professional and JavaScript Developer.
				He loves to be outside, but coding is his passion. He loves being able to make wonderful and amazing software that can better peoples lives.
				He aspires to be a full stack developer some day and plans to make some amazing software!
			</div>
		);
	}

	hide() {
		return (
			<div className="fSize" style={{ display: 'none' }}>Easter Egg!!!</div>
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
