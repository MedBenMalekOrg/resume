import React, { Component } from "react";
import { Link } from "react-router-dom";
import animateScroll from "react-scroll";

class index extends Component {
  render() {
    const content = (
      <div className="wrapper">
        {/* Started */}
        <div className="section started">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <div
                  className="h-title glitch-effect"
                  data-text="Blog under construction"
                >
                  Blog under construction
                </div>
                <div className="h-subtitle typing-bread">
                  <p>
                    <Link to="/">Go back Home</Link>
                  </p>
                </div>
                <span className="typed-bread" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default index;
