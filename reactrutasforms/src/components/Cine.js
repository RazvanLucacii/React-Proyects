import React, { Component } from 'react';
import cineImagen from './../assets/images/cine.jpg';

class Cine extends Component {
  render() {
    return (
      <div>
        <h1>Cine Component</h1>
        <img src={cineImagen} style={{width: "250px", height: "250px"}} />
      </div>
    );
  }
}

export default Cine;
