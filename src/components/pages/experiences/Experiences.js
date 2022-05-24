import React, { Component } from 'react'

export default class Experiences extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i> WORK EXPERIENCE
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <storng>Freelance Software Engineer at Upwork</storng>
                    <span>January 2022 - Current</span>
                  </h6>
                  <p className="pt">
                  I am currently a freelance software developer on Upwork.
                  </p>
                </blockquote>
              </div>

              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <storng>Freelance Software Engineer at Nisc Cloud Kenya</storng>
                    <span>January 2021 - October 2021</span>
                  </h6>
                  <p className="pt">
                  It was a good experience to work at Nisc Cloud Kenya as a Frontend Software developer. 
                  </p>
                </blockquote>
              </div>
           
              <div className="col s12">
                <blockquote className="content-right">
                  <h6 className="no-pad mt-bottom">
                    <storng>Software Engineer at Andela, Nairobi</storng>
                    <span>October 2019 - December 2020</span>
                  </h6>
                  <p className="pt">
                  During my internship program at Andela, I was part of a team that worked on a product called Authors Haven. 
                  This is a social platform that allows writers/article authors to express themselves and be sure
                   to reach out to their target audience. I was also part of a full-stack development team that worked on a product called Tembea. This project was aimed at managing Andela's travel and transfers.
                  </p>
                </blockquote>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}
