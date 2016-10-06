import React from 'react';
import JohnBio from './JohnBio';
import NecoBio from './NecoBio';
import CameronBio from './CameronBio';
import ParkerBio from './ParkerBio';
import John from '../../../public/images/johncolor.png';
import Johngs from '../../../public/images/johncolorgs.png';
import Neco from '../../../public/images/Necolineco.png';
import Necogs from '../../../public/images/Necolinegs.png';
import Cameron from '../../../public/images/cameronco.png';
import Camerongs from '../../../public/images/camerongs.png';
import Parker from '../../../public/images/BondParkerBondco.jpg';
import Parkergs from '../../../public/images/BondParkerBondgs.png';

class Team extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showJohn: false, showNeco: false, showCameron: false, showParker: false }
		this.johnToggle = this.johnToggle.bind(this);
		this.necoToggle = this.necoToggle.bind(this);
		this.cameronToggle = this.cameronToggle.bind(this);
		this.parkerToggle = this.parkerToggle.bind(this);
	}

	johnToggle(e) {
		e.preventDefault();
		this.setState({ showJohn: !this.state.showJohn });
	}

	necoToggle(e) {
		e.preventDefault();
		this.setState({ showNeco: !this.state.showNeco });
	}

	cameronToggle(e) {
		e.preventDefault();
		this.setState({ showCameron: !this.state.showCameron });
	}

	parkerToggle(e) {
		e.preventDefault();
		this.setState({ showParker: !this.state.showParker });

	}

	render() {
		return (
		 	<div id="speakers">

				<h3>Meet The Team</h3>
				<div className="separator"></div>
				<div className="row">
					<div className="col m10 offset-m1">
						<p>	We are a sincere and dedicated team of students/future graduates of DevPoint Labs.
								Our mission is to showcase our skills in javascript and provide an easy-to-use presentation tool.
								It has been an amazing journey to get to where we are today and we are proud to present our project, Globe It! We hope you like what you see and welcome your feedback.
						</p>
					</div>

					<div className="row">

						<div className="col m3">
							<a href="#" className="member-profile">
								<div className="unhover_img">
									<img src={Johngs} alt="Image of John Amador"/>
								</div>
								<div className="hover_img" id="john-click" onClick={this.johnToggle}>
									<img src={John} alt="" />
								</div>
								<span className="name-color">Web Designer - Warrior Poet</span>
								<h4 className="name-color"><span className="first-name">John </span><span className="second-name">Amador</span></h4>
							</a>
							<ul>
								<li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"  target="_blank"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="#" target="_blank"><i className="fa fa-foursquare"></i></a></li>
							</ul>
						</div>

						<div className="col m3">
							<a href="#" className="member-profile">
								<div className="unhover_img">
								  <img src={Necogs} alt="" />
								</div>
								<div className="hover_img" id="neco-click" onClick={this.necoToggle}>
								  <img src={Neco} alt="Necoline Hubner" />
								</div>
								<span className="name-color">Front-end Developer, M.S. </span>
								<h4 className="name-color"><span className="first-name">Necoline </span><span className="second-name">Hubner</span></h4>
							</a>
							<ul>
								<li><a href="#" target="_blank"><i className="fa fa-dribbble"></i></a></li>
								<li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"  target="_blank"><i className="fa fa-linkedin"></i></a></li>
							</ul>
						</div>

						<div className="col m3">
							<a href="#" className="member-profile">
								<div className="unhover_img">
								<img src={Camerongs} alt="" />
								</div>
								<div className="hover_img" id="cameron-click" onClick={this.cameronToggle}>
								<img src={Cameron} alt="Cameron Packer" />
								</div>
								<span className="name-color">JS DB Ninja, Patriot, Marine</span>
								<h4 className="name-color"><span className="first-name">Cameron</span><span className="second-name">Packer</span></h4>
							</a>
							<ul>
								<li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
								<li><a href="#" target="_blank"><i className="fa fa-vimeo-square"></i></a></li>
								<li><a href="#" target="_blank"><i className="fa fa-pinterest"></i></a></li>
							</ul>
						</div>

						<div className="col m3">
							<a href="#" className="member-profile">
								<div className="unhover_img">
								<img src={Parkergs} alt="" />
								</div>
								<div className="hover_img" id="parker-click" onClick={this.parkerToggle}>
								<img src={Parker} alt="BondParkerBond" />
								</div>
								<span className="name-color">Coding Giant(Literally), TA</span>
								<h4 className="name-color"><span className="first-name">Parker</span><span className="second-name">Bond</span></h4>
							</a>
							<ul>
								<li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
								<li><a href="#"  target="_blank"><i className="fa fa-linkedin"></i></a></li>
								<li><a href="#" target="_blank"><i className="fa fa-foursquare"></i></a></li>
							</ul>
						</div>
						{/* Next row for hidden bios */}
						<div className="row">
							<div className="col m3 john-show">
								<JohnBio show={this.state.showJohn} />
							</div>
							<div className="col m3 neco-show">
								<NecoBio show={this.state.showNeco} />
							</div>
							<div className="col m3 cameron-show">
								<CameronBio show={this.state.showCameron} />
							</div>
							<div className="col m3 parker-show">
								<ParkerBio show={this.state.showParker} />
							</div>
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
