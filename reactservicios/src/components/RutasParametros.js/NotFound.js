import React, { Component } from 'react'
import image404 from "./../../assets/images/notfound.png"

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <img src={image404} style={{width: "600px", height:"350px"}} />
      </div>
    )
  }
}
