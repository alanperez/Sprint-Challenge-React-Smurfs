import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    // console.log(addSmurf)
    axios
      .post(`http://localhost:3333/smurfs`, this.state)
        .then(response => {
          console.log(response)
        }).catch(err => {
          console.log(err)
        })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <div className="SmurfForm ui form">
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button className="ui primary button" type="submit">Add to the village</button>
          </form>
        </div>
      </div>
    );
  }
}


SmurfForm.propTypes = {
  newSmurf: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    height: PropTypes.number
  })
}
export default SmurfForm;