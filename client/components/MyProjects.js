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
    $.ajax({
      url: '/api/globes/user_globes',
      type: 'GET',
      data: { userId: this.props.userId }
    }).done( ( globes ) => {
      this.setState( globes );
    })
  }

  render() {
    let globes = this.state.globes.map( globe => {
      return (
        <ul></ul>
      )
    })
    return(

     <div>
       {globes}
     </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.id }
}

export default connect(mapStateToProps)(MyProjects);
