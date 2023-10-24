import React, { Component } from 'react';
import homeImagen from './../assets/images/home.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Component</h1>
        <img src={homeImagen} style={{width: "250px", height: "250px"}} />
      </div>
    );
  }
}

export default Home;
