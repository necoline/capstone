import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';

class MyProjects extends React.Component {
  constructor(props) {
    super(props);
    this.getGlobes = this.getGlobes.bind(this);
    this.state = { globes: [] };
  }

  componentWillMount() {
    this.getGlobes();
  }

  getGlobes() {
    console.log(this.props.userId)
    $.ajax({
      url: '/api/globe/user_globes',
      type: 'GET',
      data: { userId: this.props.userId }
    }).done( ( globes ) => {
      console.table(globes)
      this.setState({ globes: globes });
    })
  }

  render() {
    let globes = this.state.globes.map( globe => {
      return (<li key={globe._id}> {globe.name} {globe.category} </li>)
    })
    return (
      <ul>
       {globes}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.id }
}

export default connect(mapStateToProps)(MyProjects);
