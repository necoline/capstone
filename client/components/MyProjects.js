import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';


class MyProjects extends React.Component {
  constructor(props) {
    super(props);
    this.getGlobes = this.getGlobes.bind(this);
    this.deleteGlobe = this.deleteGlobe.bind(this);
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
    }).fail( (err) => { debugger})
  }

  deleteGlobe(id) {
    debugger
    $.ajax({
      url: `api/globe/${id}`,
      type:'DELETE'
    }).done( (globes) => {
      this.props.refresh();
    }).fail( err => {
      console.log(err);
    });
  }

  }

  render() {
    let globes = this.state.globes.map( globe => {
      return (
          <tr key={globe._id} className="white-border">
            <td key={globe._id} className="white-border"> {globe.name} </td>
            <td className="white-border"> {globe.category} </td>
            <td className="white-border">
              <button
                className="btn grey"
                onClick={() => this.props.history.push(`/globeEdit/${globe._id}`)}
                >
                  Edit
              </button>
            </td>
            <td className="white-border">
              <button
                className="btn grey"
                onClick={() => this.props.history.push(`/globe/${globe._id}`)}
              >
                  Launch Globe
              </button>
            </td>
            <td className="white-border">
              <button
                className="btn grey"
                key={globe._id}
                onClick={() => this.deleteboard(globe._id) }
                >
                  Delete
              </button>
            </td>
          </tr>
      )
    })
    return (
      <table className="white-border">
        <tbody>
          <tr className="white-border">
            <th>Globe Name</th>
            <th>Globe category</th>
            <th>Edit</th>
            <th>Launch Globe</th>
            <th>Delete</th>
          </tr>
          {globes}
       </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.id }
}

export default connect(mapStateToProps)(MyProjects);
