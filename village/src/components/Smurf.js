import React from 'react';
import smurficon from '../img/smurfgif.gif'

const Smurf = props => {
  return (
    <div className="Smurf ui segment" >
    <img className="ui smallimage" src={smurficon} alt="logo" />
      <h3>{props.name}</h3>
      <strong>{props.height} cm tall</strong>
      <p>{props.age} smurf years old</p>
      <button className="ui inverted red button" onClick={() => props.delSmurf(props.id)}>Discard</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;
