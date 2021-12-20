import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0 hide-on-med-and-down pt">
          <div className="card-content social">
            <h2 className="grey-text text-darken-3">
              <strong>Simon Mumina</strong>
            </h2>
            <h5 className="grey-text text-darken-1">Full Stack Web Developer</h5>
            <p className="grey-text text-darken-3">Languages: English, Kiswahili</p>
            <p className="grey-text text-darken-3">Nationality: Kenyan</p>
            <br />
                <a href="https://facebook.com" target="blank">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="blank">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="blank">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com" target="blank">
                    <i className="fab fa-github"></i>
                </a>
          </div>
        </div>
      </div>
    )
  }
}
