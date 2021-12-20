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
            <div>
                <a href="https://github.com/muminae100" target="blank">
                    <i className="fa fa-github"></i>
                </a>
                <a href="https://codepen.io/muminae100" target="blank">
                    <i className="fa fa-codepen"></i>
                </a>
                <a href="https://www.linkedin.com/in/simon-mumina-209000213/" target="blank">
                    <i className="fa fa-linkedin"></i>
                </a>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
