import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import GlitchEffect from "react-glitch-effect";
import { Link } from "react-router-dom";
import animateScroll from "react-scroll";
import Preloader from "../common/preloader";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    };
  }

  handleScroll = to => {
    console.log(to);
  };

  render() {
    const subtitle_text = [
      "Front end developer ",
      "Back end developer",
      "Love gaming"
    ];
    setTimeout(() => {
      this.setState({ show: false });
    }, 500);
    const content = (
      <div className="wrapper">
        <div className="section started">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <GlitchEffect>
                  <div
                    className="h-title glitch-effect"
                    data-text="Med Ben Malek"
                  >
                    Med Ben Malek
                  </div>
                </GlitchEffect>

                <ReactTypingEffect
                  speed="20"
                  className="h-subtitle"
                  eraseDelay="700"
                  text={subtitle_text}
                />
              </div>
            </div>
          </div>

          <animateScroll.Link
            activeClass="active"
            to="about"
            spy={true}
            hashSpy={true}
            className="mouse_btn"
            smooth={true}
            duration={500}
            offset={-120}
            onSetActive={this.handleScroll}
            ignoreCancelEvents={false}
            delay={50}
          >
            <span className="ion ion-mouse"></span>
          </animateScroll.Link>
        </div>

        {/* About */}
        <div className="section about">
          <div className="content">
            <div className="title">
              <div className="title_inner">About Me</div>
            </div>
            <div className="image">
              <img src="/images/med.jpg" alt="med ben malek" />
            </div>
            <div className="desc">
              <p>
                Dynamic and detail-oriented web developer, able to conceptualize
                and deliver elegant and user-friendly solutions efficiently and
                effectively. Has experience in developing fully functional web
                applications in multiple fields for some nonprofit organizations
                and academia. Armed with a deep understanding of Web and
                Internet technologies. Regular attendee and organizer of local
                hackathons and web developer meetings.
              </p>
              <div className="info-list">
                <ul>
                  <li>
                    <strong>Name:</strong> Med Ben Malek
                  </li>
                  <li>
                    <strong>Age:</strong> 25 Years
                  </li>
                  <li>
                    <strong>Job:</strong> Web Developer
                  </li>
                  <li>
                    <strong>Citizenship:</strong> Tunisian
                  </li>
                  <li>
                    <strong>Residence: </strong> Tunisia
                  </li>
                  <li>
                    <strong>E-mail:</strong> benmalekchrif@gmail.com
                  </li>
                </ul>
              </div>
              <div className="bts">
                <Link to="/cv" className="btn fill" data-text="Download CV">
                  Download CV
                </Link>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>

        {/* Resume */}
        <div className="section resume">
          <div className="content">
            <div className="cols">
              <div className="col col-md">
                <div className="title">
                  <div className="title_inner">Experience</div>
                </div>
                <div className="resume-items">
                  <div className="resume-item active">
                    <div className="date">2018 - Present</div>
                    <div className="name">Freelancer</div>
                    <p>
                      develop multiple projects as a freelancer with the
                      React.js / Node (Express.js) and Symfony Frameworks.
                    </p>
                  </div>
                  <div className="resume-item">
                    <div className="date">2018</div>
                    <div className="name">
                      back-end Developer -
                      <a
                        href="http://esprit.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Youth Can Organization
                      </a>
                    </div>
                    <p>
                      Establish a platform to evaluate the work of
                      municipalities after the elections with the symfony 3.4
                      Framework.
                    </p>
                  </div>
                  <div className="resume-item">
                    <div className="date">2016</div>
                    <div className="name">
                      back-end Developer -{" "}
                      <a
                        href="http://esprit.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Formalab
                      </a>
                    </div>
                    <p>
                      An internship took place in the FormaLab training center
                      with the objective of creating a web platform for the
                      center under the Laravel Framework 5.3.
                    </p>
                  </div>
                  <div className="resume-item">
                    <div className="date">2015</div>
                    <div className="name">Senior Developer - ARRU</div>
                    <p>
                      Senior Developer at the Urban Rehabilitation and
                      Renovation Agency, IT Department.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-md">
                <div className="title">
                  <div className="title_inner">Education</div>
                </div>
                <div className="resume-items">
                  <div className="resume-item">
                    <div className="date">2017 - 2020</div>
                    <div className="name">
                      <a
                        href="http://esprit.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Private Higher School of Engineering and Technology.{" "}
                      </a>
                    </div>
                    <p>WEB AND INTERNET TECHNOLOGIES ENGINEER. </p>
                  </div>
                  <div className="resume-item">
                    <div className="date">2013 - 2017</div>
                    <div className="name">
                      <a
                        href="http://www.isa2m.rnu.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Higher Institute of Multimedia Arts of Manouba
                      </a>
                    </div>
                    <p>
                      FUNDAMENTAL LICENSE IN COMPUTER SCIENCE AND MULTIMEDIA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="section skills">
          <div className="content">
            <div className="title">
              <div className="title_inner">My Skills</div>
            </div>
            <div className="skills">
              <ul>
                <li>
                  <div className="name">
                    JavaScript - (React.js / Node.js / Express.js)
                  </div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }}>
                      <span className="percent">70%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">PHP - (Symfony)</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }}>
                      <span className="percent">90%</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Python - (Dajago)</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }}>
                      <span className="percent">75%</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <React.Fragment>
        {this.state.show ? <Preloader /> : content}
      </React.Fragment>
    );
  }
}
