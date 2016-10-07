import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
  }

render() {
  return (
      <div className="Container">
        <h1 className="text-align center" style={{ color: '#f5f5f5' }}>
          Make your own Globe
        </h1>

        <div className="row">
          <h3 className="col m8 push-m2 pull-2m" style={{ color: '#f5f5f5' }}>
            Overview
          </h3>
        <div className="col m8 push-m2 pull-2m tutorial" style={{ color: '#f5f5f5'}}>
          <p>
            Globe It is a presentation tool that provides a visually dynamic presentation<br></br>
            tool to display global data with 3D animation. This site allows you to upload<br></br>
            and store your own globes. GlobeIT is garunteed to be always available and always stunning.
          </p>
        </div>
      </div>
      <div className="row">
        <h3 className="col m8 push-m2 pull-2m"style={{ color: '#f5f5f5' }}>
          Make your own globe
        </h3>
      <div className="col m8 push-m2 pull-2m tutorial" style={{ color: '#f5f5f5' }}>
        <ol>
          <li>
           Navigate to the New Projects page
          </li>
          <li>
           Enter the name of the globe and the category of data you will be displaying. This category title is the description in the legend that allows the viewer to interpret the data.
          </li>
          <li>
            Once you click the 'Submit' button you will be able to view the form for your data entry.
          </li>
          <li>
            Latitude and Longitude: Enter the geo-coordinance into the latitde and longitude slots.
          </li>
          <li>
            Magnitude: Enter the number that will be represented on the globe.
          </li>
          <li>
            Add: After the geo-coordinance and the magnitude is successfully entered, click 'Add' to push the data to a chart below, from this point, continue to add data points through this chart until you are ready to launch your globe.
          </li>
          <li>
            Globe Complete: Once you are ready to see your data on the globe, the 'Globe Complete' button will take you to your personal folder where you can view your globe or continue to add more data points.
          </li>
        </ol>
        <div>
          <Link to="/NewProject" className="btn grey">View</Link>
        </div>
      </div>
      </div>
    <div className="row">
      <h3 className="col m8 push-m2 pull-2m" style={{ color: '#f5f5f5' }}>
          Launching your globe
      </h3>
      <div className="col m8 push-m2 pull-2m tutorial" style={{ color: '#f5f5f5' }}>
          <ol>
            <li>
              Navigate to the My Projects page. This can either be done in the toolbar at the top of the screen or by hitting the 'Globe Complete' button listed at the bottom of the 'New Projects' page
            </li>
            <li>
              In the 'My Projects' you will be able to see all of the globes you have on file.
            </li>
            <li>
              To launch your globe, simply click the 'Launch Globe' button and watch your data come to life with our dynamic technology.
            </li>
          </ol>
          <div>
            <Link to="/MyProjects" className="btn grey">View</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <h3 className="col m8 push-m2 pull-2m" style={{ color: '#f5f5f5' }}>
          Editing your globe
        </h3>
        <div className="col m8 push-m2 pull-2m tutorial" style={{ color: '#f5f5f5' }}>
            <ol>
              <li>
                Navigate to the My Projects page using the toolbar at the top of the screen.
              </li>
              <li>
                Once you are in My Projects, choose the project you would like to continue working on.
              </li>
              <li>
                By clicking on the 'Edit' button, you will be taken to a page where you will be able to view all of your data points and continue adding points to the globe.
              </li>
            </ol>
        </div>
      </div>

      </div>
    )}
}

export default Tutorial;
