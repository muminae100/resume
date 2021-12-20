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
              Phone: <a style={{"color":"white"}} href="tel:+254741674737">+254741674737</a>
              <br />
              Email: <a style={{"color":"white"}} href="mailto:smuminaetx100@gmail.com">smuminaetx100@gmail.com</a> 
              <br />
              Website: <a style={{"color":"white"}} href="https://simon-portfolio.herokuapp.com/">Dev Simon</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
