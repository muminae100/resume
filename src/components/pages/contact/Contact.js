import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong># CONTACT</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              123 Google Ave, San Francisco, USA
            </p>
            <p className="grey-text text-lighten-3 pt">
              Phone: +1 234 567 890
              <br />
              Email: Email@gmail.com
              <br />
              Website: www.google.com
            </p>
          </div>
        </div>
      </div>
    )
  }
}
