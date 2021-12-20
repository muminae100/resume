import React, { Component } from 'react'

export default class Hobbies extends Component {
  render() {
    return (
      <div>
        <div className="card z-depth-0">
          <div className="card-content">
            <h6>
              <strong>
                <i className="fas fa-tools"></i>Hobbies
              </strong>
            </h6>
            <hr />
            <div className="row mt">
              <div className="col s12">
                <blockquote className="content-right">
                  <p className="pt">
                    Traveling, Hiking and Watching movies.
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
