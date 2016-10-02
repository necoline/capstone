import React from 'react';
import Globe from './Globe';
import $ from 'jQuery';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { globeData: [],
                   globe: {
                     name: "Human Development",
                     category: "Gender Education"
                   }
                 }
  }

  componentDidMount() {
    $.ajax({
      url: '/api/data',
      dataType: 'json',
      type: 'GET'
    }).done( globeData => {
      this.setState({ globeData })
    }).fail( (data) => {
    })
  }

  render() {
    return (
      <div className="background">
        <Globe data={this.state.globeData} details={this.state.globe} />
      </div>
    );
  }
}

export default Landing;
