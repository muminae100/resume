import React, { Component } from 'react'

export default class Educations extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong><i class="fas fa-graduation-cap"></i> EDUCATION</strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>Bachelor of Science in Computer Science, 
                      Cooperative University of Kenya, Nairobi</strong>
                    <span>September 2016 - April 2021</span>
                  </h6>
                  <p className="pt">
                  This course has helped to build my understanding of a wide range of software, 
                  and technological ICT skills required by the industry
                  </p>
                </blockquote>
              </div>
            
              <div className="col s12">
                <blockquote>
                  <h6 className="no-pad mt-bottom">
                    <strong>CERTIFICATE OF WEB DEVELOPMENT</strong>
                    <span>2017 - 2019</span>
                  </h6>
                  <p className="pt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                  earum doloribus dicta quod architecto, praesentium totam
                  molestiae similique culpa repellat blanditiis nam facilis eius
                  quaerat distinctio vitae, tenetur beatae repellendus?
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
