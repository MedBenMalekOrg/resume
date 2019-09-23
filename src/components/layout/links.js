import React, { Component } from "react";

export default class links extends Component {
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="soc">
            <a
              href="https://www.facebook.com/M.benmalekchrif"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ion ion-social-facebook" />
            </a>
            <a
              href="https://linkedin.com/in/med-ben-malek/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ion ion-social-linkedin" />
            </a>
            <a
              href="https://github.com/MedBenMalek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ion ion-social-github" />
            </a>
          </div>
          <div className="copy">© 2019 Med Ben Malek. All rights reserved.</div>
          <div className="clr" />
        </footer>
        {/* Lines */}
        <div className="line top" />
        <div className="line bottom" />
        <div className="line left" />
        <div className="line right" />
      </React.Fragment>
    );
  }
}
