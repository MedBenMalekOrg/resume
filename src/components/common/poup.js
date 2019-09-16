import React, { Component } from "react";

export default class poup extends Component {
  render() {
    const { category, title, text, img } = this.props;
    return (
      <React.Fragment>
        <div className="mfp-bg mfp-fade mfp-ready" />
        <div
          className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
          tabIndex={-1}
          style={{ overflow: "hidden auto" }}
        >
          <div className="mfp-container mfp-s-ready mfp-inline-holder">
            <div className="mfp-content">
              <div id="popup-1" className="popup-box mfp-fade">
                <div className="content">
                  <div className="image">
                    <img src="images/works/work1.jpg" alt />
                  </div>
                  <div className="desc">
                    <div className="category">{category}</div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <a href="#" className="btn" data-text="View Project">
                      View Project
                    </a>
                  </div>
                </div>
                <button
                  title="Close (Esc)"
                  type="button"
                  className="mfp-close"
                  onClick={this.props.closeMethod}
                >
                  ×
                </button>
              </div>
            </div>
            <div className="mfp-preloader">Loading...</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
