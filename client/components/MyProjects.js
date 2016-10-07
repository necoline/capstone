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
    $.ajax({
      url: '/api/globe/user_globes',
      type: 'GET',
      data: { userId: this.props.userId }
    }).done( ( globes ) => {
      //console.table(globes)
      this.setState({ globes: globes });
    }).fail( (err) => { debugger})
  }

  deleteGlobe(id) {
    $.ajax({
      url: `api/globe/${id}`,
      type:'DELETE'
    }).done( (globes) => {
      this.getGlobes();
    }).fail( err => {
      console.log(err);
    });
  }

  render() {
    let globes = this.state.globes.map( globe => {
      return (
          <tr key={globe._id} className="text-align center">
            <td key={globe._id} className="text-align center"> {globe.name} </td>
            <td className="text-align center"> {globe.category} </td>
            <td className="text-align center">
              <button
                className="btn grey"
                onClick={() => this.props.history.push(`/globeEdit/${globe._id}`)}
                >
                  Edit
              </button>
            </td>
            <td className="text-align center">
              <button
                className="btn grey"
                onClick={() => this.props.history.push(`/globe/${globe._id}`)}
              >
                  Launch Globe
              </button>
            </td>
            <td className="text-align center">
              <button
                className="btn grey"
                key={globe._id}
                onClick={() => this.deleteGlobe(globe._id) }
                >
                  Delete
              </button>
            </td>
          </tr>
      )
    })
    return (
      <div className="container">
        <table>
          <tbody className="fSize">
            <tr style={{ borderBottom: "solid 1px white"}}>
              <th className="text-align center">Globe Name</th>
              <th className="text-align center">Globe category</th>
              <th className="text-align center">Edit</th>
              <th className="text-align center">Launch Globe</th>
              <th className="text-align center">Delete</th>
            </tr>
            {globes}
          </tbody>
       </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { userId: state.auth.id }
}

export default connect(mapStateToProps)(MyProjects);
