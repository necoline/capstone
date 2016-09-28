import React from 'react';

// const JohnBio = (show) => (

// )

class JohnBio extends React.Component {

	show() {
		return (
			<div style={{ color: 'white' }}>
				Bacon ipsum dolor amet venison swine brisket ham hock beef ribs pig frankfurter pork loin ribeye. 
				Picanha tail ham hock, tenderloin chicken short ribs alcatra spare ribs ham beef ribs salami bacon. 
				Chuck filet mignon beef ribs, ground round beef leberkas venison strip steak tail spare ribs. 
				Pork chop bacon capicola, venison short ribs kevin hamburger leberkas doner tongue ball tip beef sirloin shankle. 
				let mignon frankfurter pancetta kevin.
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
