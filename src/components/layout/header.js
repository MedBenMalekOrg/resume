import React, { Component } from "react";
import { Link } from "react-router-dom";

class header extends Component {
  render() {
    return (
      <header>
        <div className="head-top">
          <Link to="#" className="menu-btn">
            <span />
          </Link>
          <div className="top-menu">
            <ul>
              <li>
                <Link to="/" className="lnk">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" className="lnk">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="lnk">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="btn">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default header;
