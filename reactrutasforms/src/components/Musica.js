import React, { Component } from 'react';
import musicaImagen from './../assets/images/musica.jpg';

export default class Musica extends Component {
  render() {
    return (
      <div>
        <h1>Musica Component</h1>
        <img src={musicaImagen} style={{width: "250px", height: "250px"}} />
      </div>
    );
  }
}
