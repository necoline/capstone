import React from 'react';
import $ from 'jquery';

class MyProjects extends React.Component {
  constructor(props) {
    super(props);
    this.getGlobes = this.getGlobes.bind(this);
    this.state.globes = [];
  }

  componentWillMount() {
    this.getGlobes();
  }

  getGlobes() {
    $.ajax({
      url: '/:id',
      type: 'GET',
    }).done( ( globes ) => {
      setState( globes );
    })
  }

  render() {
    return(

     <div>
       {this.state.globes}
     </div>
    );
  }
}

export default MyProjects;
