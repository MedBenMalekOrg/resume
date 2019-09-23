import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

class preloader extends Component {
  render() {
    return (
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="pre-inner">
              <div className="load typing-load">
                <ReactTypingEffect
                  speed={50}
                  className="h-subtitle"
                  typingDelay={800}
                  eraseDelay={800}
                  text="loading..."
                />
              </div>
              <span className="typed-load" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default preloader;
