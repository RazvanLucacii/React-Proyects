import React, { Component } from 'react'

export default class MenuRutasCollatz extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/menu/6">Collatz 6</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/menu/43">Collatz 43</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/menu/564">Collatz 564</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/notfound">NotFound</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
