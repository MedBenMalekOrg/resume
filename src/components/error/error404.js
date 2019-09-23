import React from "react";
import { Link } from "react-router-dom";

export default function error404() {
  return (
    <div className="wrapper">
      <div className="section started">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div className="h-title glitch-effect" data-text="Err">
                404
              </div>
              <span className="typed-subtitle" />
              <p>
                <Link to="/" className="menu-btn">
                  Home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
