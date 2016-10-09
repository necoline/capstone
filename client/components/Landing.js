import React from 'react';
import Globe from './Globe';
import $ from 'jquery';


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { globeData: [],
                   globe: {
                     name: "Code Conferences",
                     category: "Coding Events Around the Globe"
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
