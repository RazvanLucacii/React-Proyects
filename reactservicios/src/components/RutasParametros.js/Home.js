import React, { Component } from 'react'
import imagenHome from "./../../assets/images/home.jpg"

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <img src={imagenHome} style={{width:"350px", height:"350px"}}/>
      </div>
    )
  }
}
