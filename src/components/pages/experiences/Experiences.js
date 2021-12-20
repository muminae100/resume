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
                    <span>January 2021 - Current</span>
                  </h6>
                  <p className="pt">
                  I am currently a freelance software engineer on Upwork whereby I have worked on 
                  a number of projects with both local and international clients. 
                  Here are some of the clients that I have worked with:
                  <ul>
                    <li style={{"font-weight":"bold"}}>Kevin $ Sons General Supply and services</li>
                    <p>This is a company based in Kenya, that I worked with for 2 months, 
                      and successfully delivered a web development project using python flask, Ajax, Javascript, jQuery, Bootstrap and Restful APIS.</p>
                      <li style={{"font-weight":"bold"}}>Buy Kenya</li>
                    <p>This is a company based in Kenya, that I worked with for 3 months, 
                      and successfully delivered an e-commerce Flask Api + ReactJs frontend project</p>
                  </ul>
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
                  I was part of a team that worked on a product called Authors Haven. 
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
