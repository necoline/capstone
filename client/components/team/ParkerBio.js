import React from 'react';


class ParkerBio extends React.Component {

	show() {
		return (
			<div style={{ color: 'white' }}>
				Commander James Bond, C.M.G., R.N. (born April 13, 1968) is a Senior Operational Officer of the 'Double-O' ('00') branch, an ultra-covert Black Ops unit within the British Secret Intelligence Service (MI6). 
				As an agent of MI6, Bond holds code number "007". The 'Double-O' prefix indicates his discretionary licence to kill in the performance of his duties. 
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

