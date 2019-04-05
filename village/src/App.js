import React, { Component } from 'react';
import axios from 'axios';
import { Route,NavLink } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {
  axios
    .get(`http://localhost:3333/smurfs`)
      .then(response => {
        // console.log(response); <--console logs the data in console.. we need to get it to display
          this.setState({  // <-- we set the state so we can display the data.
            smurfs: response.data
           })
      }).catch(err => {
          console.log(err)
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="ui container">
        <div className="App">
        <div className="ui secondary pointing menu">
          <NavLink to="/" className="active item">Home</NavLink>
          <NavLink to="/smurf-form" className="item">Form</NavLink>
            <div className="ui right menu">
            <NavLink to="/edit-form" className="ui item">Edit</NavLink>
            </div>
        </div>
        <Route path="/"
         render={() => (
          <Smurfs
          smurfs={this.state.smurfs}
        />
        )}/>
        <Route
        exact path="/smurf-form"
        component={SmurfForm}
        />
        </div>
      </div>
    );
  }
}

export default App;