import React from 'react';
import JohnBio from './JohnBio';
import John from '../../../public/images/johncolor.png';
import Johngs from '../../../public/images/johncolorgs.png';
import Neco from '../../../public/images/Necolineco.png';
import Necogs from '../../../public/images/Necolinegs.png';
import Cameron from '../../../public/images/cameronco.png';
import Camerongs from '../../../public/images/camerongs.png';
import Parker from '../../../public/images/BondParkerBond.png';
import Parkergs from '../../../public/images/BondParkerBondgs.png';

class Team extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showJohn: false }
		this.johnToggle = this.johnToggle.bind(this);
	}

	johnToggle(e) {
		e.preventDefault();
		this.setState({ showJohn: !this.state.showJohn });
	}

	render() {
		return (
		 	<div id="speakers">

				<h3>Meet The Team</h3> 
				<div className="separator"></div>
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<p>	We are a sincere and dedicated team of students/future graduates of Dev Point Labs.
								Our goal is to create, design, and build websites that kick ass! It has been an amazing 
								journey to get to where we are today and we feel confident that we can present to you 
								a solid example of the skills we have learned at Dev Point labs and what we have jointly
								accomplished as a team. We are proud to present our project, Globe IT! We hope you like what
								you see and welcome your feedback.
						</p>
					</div>
					
					<div className="row">
					
						<div className="col-md-3">
							<a href="#" className="member-profile">
								<div className="unhover_img">
									<img src={Johngs} alt="Image of John Amador"/>
								</div>
								<div className="hover_img" id="john-click" onClick={this.johnToggle}>
									<img src={John} alt="" />
								</div>
								<span className="name-color">Web Designer Warrior Poet</span>
								<h4 className="name-color"><span className="first-name">John </span><span className="second-name">Amador</span></h4>
							</a>	
							<ul>
								<li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"  target="_blank"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="#" target="_blank"><i className="fa fa-foursquare"></i></a></li>						
							</ul>
						</div>
						
						<div className="col-md-3">
							<a href="#" className="member-profile">
								<div className="unhover_img">
								<img src={Necogs} alt="" />
								</div>
								<div className="hover_img">
								<img src={Neco} alt="" />
								</div>
								<span className="name-color">U of U, DPL, MBA</span>
								<h4 className="name-color"><span className="first-name">Necoline </span><span className="second-name">Hubner</span></h4>
							</a>	
							<ul>
								<li><a href="#" target="_blank"><i className="fa fa-dribbble"></i></a></li>
								<li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"  target="_blank"><i className="fa fa-linkedin"></i></a></li>
							</ul>
						</div>
						
						<div className="col-md-3">
							<a href="#" className="member-profile">
								<div className="unhover_img">
								<img src={Camerongs} alt="" />
								</div>
								<div className="hover_img">
								<img src={Cameron} alt="" />
								</div>
								<span className="name-color">JS DB Ninja, Patriot, Marine</span>
								<h4 className="name-color"><span className="first-name">Cameron </span><span className="second-name">Packer</span></h4>
							</a>					
							<ul>
								<li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
								<li><a href="#" target="_blank"><i className="fa fa-vimeo-square"></i></a></li>						
								<li><a href="#" target="_blank"><i className="fa fa-pinterest"></i></a></li>						
							</ul>					
						</div>
						
						<div className="col-md-3">
							<a href="#" className="member-profile">
								<div className="unhover_img">
								<img src={Parkergs} alt="" />
								</div>
								<div className="hover_img">
								<img src={Parker} alt="" />
								</div>
								<span className="name-color">Coding Giant - (Literally) TA - Student Advisor</span>
								<h4 className="name-color"><span className="first-name">Bond </span><span className="second-name">Parker Bond</span></h4>
							</a>					
							<ul>
								<li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"  target="_blank"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="#" target="_blank"><i className="fa fa-foursquare"></i></a></li>
							</ul>						
						</div>
						{/* Next row for hidden bios */}
						<div className="col-md-3 john-show">
							<JohnBio show={this.state.showJohn} />
						</div>

					</div>
						
					<div className="clear"></div>
					
					<div className="clear"></div>
					
				</div>

			</div>

		);
	}
}

export default Team;

