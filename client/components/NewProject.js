import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

// *adding the class
class NewProject extends React.Component {
  constructor(props) {
    super(props);
    this.addGlobe = this.addGlobe.bind(this);
    this.updateGlobe = this.updateGlobe.bind(this);
    this.dataSets = this.dataSets.bind(this);
    this.state = { hasRequired: false, globe: {} }
  }
//
// *add the function that creates new object in DB with
addGlobe(e) {
  e.preventDefault();
  let name = this.refs.name.value;
  let category = this.refs.category.value;
  //let latitude = this.refs.latitude.value;
  //let longitude = this.refs.longitude.value;
  //let magnitude = this.refs.magnitude.value;
  $.ajax({
    url: '/api/globe',
    type: 'POST',
    data: { name, category, userId: this.props.userId }
  }).done( globe => {
    this.refs.form.reset();
    this.setState({ hasRequired: true, globe })
  }).fail( (data) => {
  })
}
//append new data points to globe
updateGlobe(e) {
  e.preventDefault();
  let longitude = this.refs.longitude.value;
  let latitude = this.refs.latitude.value;
  let magnitude = this.refs.magnitude.value;
  $.ajax({
    url: `/api/globe/${this.state.globe._id}`,
    type: 'PUT',
    data: { latitude, longitude, magnitude }
  }).done( globe => {
    this.refs.form2.reset();
    this.setState({ globe })
  })
}

dataSets() {
  let globe = this.state.globe;
  let lat = globe.latitude;
  let long = globe.longitude;
  let mag = globe.magnitude;
  return lat.map( (point, i) => {
    return (
    <tr key={i}>
      <td style={{ color: "#ffffff !important" }}>{lat[i]}</td>
      <td className="white-text">{long[i]}</td>
      <td>{mag[i]}</td>
    </tr>
  )
  });
}

render () {
  return (
  <div className="container">
    { !this.state.hasRequired ?
      <form onSubmit={this.addGlobe} ref="form">
        <input placeholder="name" ref="name"></input>
        <input placeholder="category" ref="category"></input>
        <button className="btn" type="submit">Submit</button>
      </form>
      :
      <div>
        <p>{this.state.globe.name}</p>
        <p>{this.state.globe.category}</p>
        <form onSubmit={this.updateGlobe} ref="form2">
          <input required placeholder="latitude" ref="latitude"></input>
          <input required placeholder="longitude" ref="longitude"></input>
          <input required placeholder="magnitude" ref="magnitude"></input>
          <button className="btn" type="submit">Submit</button>
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>lat</th>
              <th>long</th>
              <th>mag</th>
            </tr>
          </thead>
          <tbody>
            {this.dataSets()}
          </tbody>
        </table>
      </div>
    }
  </div>
 )}
}

const mapStateToProps = (state) => {
  return { userId: state.auth.id }
}
export default connect(mapStateToProps)(NewProject);
