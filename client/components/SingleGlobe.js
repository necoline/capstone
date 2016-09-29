import React from 'react';
import Globe from './Globe';
import $ from 'jQuery';

class SingleGlobe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { globe: {}, globeData: []}
  }

  componentWillMount() {
    //get globe by id
    $.ajax({
      url: `/api/globe/${this.props.params.id}`,
      type: 'GET'
    }).done( globe => {
      let counter = 0;
      let long = globe.longitude;
      let mag = globe.magnitude;
      let globeData = [];
      globe.latitude.forEach( (l, i) => {
        globeData.push(parseFloat(l))
        globeData.push(parseFloat(long[i]))
        globeData.push(parseFloat(mag[i]))
        globeData.push(counter++)
      })
      this.setState({ globe, globeData })
    })
  }

render() {
  return (
    <div>
      this is working
      <Globe data={this.state.globeData} />
    </div>
  )}
}

export default SingleGlobe;
