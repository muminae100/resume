import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
          <h6 className="white-text">
              <strong># PERSONAL SKILLS</strong>
          </h6>
          <hr/>
          <div style={{"color":"white","margin-left":"4px"}} className="row pt">
            <ul>
              <li> Good communication skills</li>
              <li> Prompt action on feedback and attention to detail</li>
              <li> Effective team player and leader</li>
            </ul>
          </div>
            <h6 className="white-text">
              <strong># PROFESSIONAL SKILLS</strong>
            </h6>
            <hr />
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">HTML, CSS, SCSS, Bootstrap and TailwindCSS</p>
                <div className="progress grey">
                  <div className="determinate white" style={{ width: '95%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">React, React Redux, ES6 JavaScript, jQuery, Ajax, Rest APIs and GraphQL.</p>
                <div className="progress grey">
                  <div className="determinate white" style={{ width: '95%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Flask and Flask Restful</p>
                <div className="progress grey">
                  <div className="determinate white" style={{ width: '90%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Django  and Django REST Framework</p>
                <div className="progress grey">
                  <div className="determinate white" style={{ width: '85%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">CI/CD: Github Actions, AWS, Heroku</p>
                <div className="progress grey">
                  <div className="determinate white" style={{ width: '85%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">PostgreSQL, MySQL, MongoDB</p>
                <div className="progress grey">
                  <div className="determinate white" style={{ width: '85%'}}></div>
                </div>
              </div>
            </div>
            <div className="row pt">
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">Testing and linting: TravisCI</p>
                <div className="progress grey">
                  <div className="determinate white" style={{ width: '85%'}}></div>
                </div>
              </div>
              <div className="col m6 s12">
                <p className="grey-text text-lighten-3">UI/UX: Adobe XD, Figma</p>
                <div className="progress grey">
                  <div className="determinate white" style={{ width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
