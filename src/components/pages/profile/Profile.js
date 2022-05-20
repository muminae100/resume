import React, { Component } from 'react';
import ImgProfile from "../../images/dev_simon.JPG";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
            <img style={{"width":"450px","height":"200px"}} className="circle responsive-img"
            src={ImgProfile}
            alt="Simon"
            />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
            <div className="card-content center social">
                <h2 className="grey-text text-lighten-3">
                    <strong>Simon Mumina</strong>
                </h2>
                <h5 className="grey-text text-lighten-1">Frontend Website Developer</h5>
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
        <div className="card light-blue darken-4 z-depth-0">
            <div className="card-content">
                <h6 className="white-text">
                    <strong># PROFILE</strong>
                </h6>
                <hr />
                <p className="grey-text text-lighten-3 pt">
                I am a passionate front-end software developer with over 3 years of experience in the field. 
                My main stack is Python and Javascript and I have immense experience also working with related 
                technologies in architecture design. Throughout my time as a software developer, I have worked with 
                different teams to create applications that optimized processes, saved on cost, and improved users' experience.
                </p>
            </div>
        </div>
      </div>
    )
  }
}
