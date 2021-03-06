import React from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class EditGlobe extends React.Component {
  constructor(props) {
    super(props);
    this.updateGlobe = this.updateGlobe.bind(this);
    this.dataSets = this.dataSets.bind(this);
    this.getGlobe = this.getGlobe.bind(this);
    // this.llmPoints = this.llmPoints.bind(this);
    this.state = { globe: { latitude: [], longitude: [], magnitude: []} };
  }
componentWillMount() {
  this.getGlobe();
  // this.llmPoints();
}

// componentDidMount() {
//   debugger
// }

getGlobe() {
  $.ajax({
    url: `/api/globe/${this.props.params.id}`,
    type: 'GET'
  }).done( globe => {
    this.setState({ globe });
  })
}

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

deleteData(index) {
  $.ajax({
     url: `/api/globe/${this.props.params.id}/delete_points`,
     type: 'PUT',
     data: { index }
  }).done( globe => {
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
        <td><button className="btn grey" onClick={() => this.deleteData(i)}>Delete</button></td>
      </tr>
    )
    });
  }

  // llmPoints() {
  //   let globe = this.data;
  //   console.log(globe)
  // }

  render() {
    return (
      <div className="container">
        <div>
          <p className="fSize" >{this.state.globe.name}</p>
          <p className="fSize" >{this.state.globe.category}</p>
          <form onSubmit={this.updateGlobe} ref="form2">
            <input required placeholder="latitude" ref="latitude"></input>
            <input required placeholder="longitude" ref="longitude"></input>
            <input required placeholder="magnitude" ref="magnitude"></input>
            <button className="btn grey fSize" type="submit">Submit</button>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th className="fSize">lat</th>
                <th className="fSize">long</th>
                <th className="fSize">mag</th>
                <th className="fSize"></th>
              </tr>
            </thead>
            <tbody className="fSize">
              {this.dataSets()}
            </tbody>
          </table>
        </div>
      </div>
  )}
}

const mapStateToProps = (state) => {
  return { userId: state.auth.id }
}

export default connect(mapStateToProps)(EditGlobe);
