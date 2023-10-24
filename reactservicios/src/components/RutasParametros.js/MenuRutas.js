import React, { Component } from 'react'

export default class MenuRutas extends Component {
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
                  <a class="nav-link" href="/tabla/6">Tabla Multiplicar 6</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/tabla/43">Tabla Multiplicar 43</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/tabla/564">Tabla Multiplicar 564</a>
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
