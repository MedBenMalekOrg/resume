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
                    <strong>Job:</strong> Student engineer in Web and Internet
                    technologies
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
                <a
                  href="https://drive.google.com/file/d/1s47iy9KiuF-U285SwJkiHkBd4MNqZaS7/view?usp=sharing"
                  className="btn fill"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
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
                    <div className="date">July - August 2019</div>
                    <div className="name">INTERNSHIP WEB DEVELOPMENT</div>
                    <p>
                      Creadevity - Tunis, Tunisia | Development of a platform
                      for the production and analysis of statistics
                    </p>
                  </div>
                  <div className="resume-item">
                    <div className="date">February - May 2016</div>
                    <div className="name">INTERNSHIP WEB DEVELOPMENT</div>
                    <p>
                      Formalab - Tunis, Manouba | Development of a web platform
                      for the training center for training management
                    </p>
                  </div>
                  <div className="resume-item">
                    <div className="date">July - August 2015</div>
                    <div className="name">IT TRAINEE</div>
                    <p>
                      Arru - Tunis, Tunisia | Oracle Development for the Urban
                      Rehabilitation and Renovation Agency, IT Department
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
                        Computer Engineering | Web Technologies and the Internet
                      </a>
                    </div>
                    <p>Private Higher School of Engineering of Tunis ESPRIT </p>
                  </div>
                  <div className="resume-item">
                    <div className="date">2014 - 2017</div>
                    <div className="name">
                      <a
                        href="http://www.isa2m.rnu.tn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bachelor's degree in Computer Science
                      </a>
                    </div>
                    <p>Higher Institute of Multimedia Arts ISAMM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="section service">
          <div className="content">
            <div className="title">
              <div className="title_inner">My Skills</div>
            </div>
            <div className="service-items">
              <div className="service-item">
                <div className="icon">
                  <span className="ion ion-code" />
                </div>
                <div className="name">Programming languages</div>
                <p> JavaScript | Python | JAVA | JEE C# SQL | PL/SQL </p>
              </div>
              <div className="service-item">
                <div className="icon">
                  <span className="ion ion-ios-analytics" />
                </div>
                <div className="name">Database</div>
                <p> Oracle | MySQL | MongoDB </p>
              </div>
              <div className="service-item">
                <div className="icon">
                  <span className="ion ion-social-chrome" />
                </div>
                <div className="name">Web Frameworks</div>
                <p> Symfony | Laravel | React js | Angular Js | Express Js</p>
              </div>
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
