import React, { Component } from 'react';
import ImgProfile from "../../images/dev_simon.JPG";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatarImg">
            <img className="circle responsive-img"
            src={ImgProfile}
            alt="Simon"
            />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
            <div className="card-content center social">
                <h2 className="grey-text text-lighten-3">
                    <strong>Simon Mumina</strong>
                </h2>
                <h5 className="grey-text text-lighten-1">Full Stack Website Developer</h5>
                <a href="#" target="blank">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="https://twitter.com" target="blank">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://linkedin.com" target="blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com" target="blank">
                    <i className="fab fa-github fa-2x"></i>
                </a>
            </div>
        </div>
        <div className="card light-blue darken-4 z-depth-0">
            <div className="card-content">
                <h6 className="white-text">
                    <strong># PROFILE</strong>
                </h6>
                <hr />
                <p className="grey-text text-lighten-3 pt">
                I am a passionate full stack software developer with over 3 years of experience in the field. 
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
