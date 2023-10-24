import React, { Component } from 'react'
import imagenHome from './../../assets/images/home.jpg'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
            <img src={imagenHome} style={{width: "500px", height:"500px"}} /> 
      </div>
    )
  }
}
