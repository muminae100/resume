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
              Karen, Nairobi, Kenya
            </p>
            <p className="grey-text text-lighten-3 pt">
              Phone: <br />
              <i className="fa fa-phone"></i> <a style={{"color":"white"}} href="tel:+254741674737">+254 11817212</a>
              <br />
              <br />
              Email: <br />
              <i className="fa fa-envelope"></i> <a style={{"color":"white"}} href="mailto:smuminaetx100@gmail.com">simonmumina2000@gmail.com</a> 
              <br />
              <br />
              Website: <br /> 
              <i className="fa fa-globe"></i> <a style={{"color":"white"}} href="https://devsimon.netlify.app/">https://devsimon.netlify.app/</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
