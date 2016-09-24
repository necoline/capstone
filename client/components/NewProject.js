import React from 'react';
import $ from 'jquery';

// *adding the class
class NewProject extends React.Component {
  constructor(props) {
    super(props);
    this.addGlobe = this.addGlobe.bind(this);
  }
//
// *add the function that creates new object in DB with
addGlobe(e) {
  e.preventDefault();
  let name = this.refs.name.value;
  let category = this.refs.category.value;
  let latitude = this.refs.latitude.value;
  let longitude = this.refs.longitude.value;
  let magnitude = this.refs.magnitude.value;
  $.ajax({
    url: '/api/globe',
    type: 'POST',
    data: { name, category, latitude, longitude, magnitude }
  }).done( globe => {
    this.refs.form.reset();
  })
}
//append new data points to globe
//updateGlobe(e) {
//}
//
//
//
//
//
//
render () {
  return (
  <div className="container">
    <form onSubmit={this.addGlobe} ref="form">
      <input placeholder="name" ref="name"></input>
      <input placeholder="category" ref="category"></input>
      <input placeholder="latitude" ref="latitude"></input>
      <input placeholder="longitude" ref="longitude"></input>
      <input placeholder="magnitude" ref="magnitude"></input>
      <button className="btn" type="submit">Submit</button>
    </form>
  </div>
 )}
}
export default NewProject;
