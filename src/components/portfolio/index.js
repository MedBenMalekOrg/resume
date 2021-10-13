import React, { Component } from "react";
import GlitchEffect from "react-glitch-effect";
import { Link } from "react-router-dom";
import animateScroll from "react-scroll";
import Preloader from "../common/preloader";
import Popup from "reactjs-popup";
import ReactTypingEffect from "react-typing-effect";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      popup: false,
      portfolio: [
        {
          text:
            "Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.",
          category: "MOCKUPS1",
          title: "CANVAS TOTE BAG MOCKUP",
          img: process.env.PUBLIC_URL+"images/works/work1.jpg"
        },
        {
          text:
            "Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.",
          category: "MOCKUPS2",
          title: "CANVAS TOTE BAG MOCKUP",
          img: process.env.PUBLIC_URL+"images/works/work1.jpg"
        },
        {
          text:
            "Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.",
          category: "MOCKUPS3",
          title: "CANVAS TOTE BAG MOCKUP",
          img: process.env.PUBLIC_URL+"images/works/work1.jpg"
        }
      ]
    };
  }

  handleScroll = to => {
    console.log(to);
  };

  render() {
    const formalab = ["Laravel", "MySQL", "Scrum", "Git"];
    const iderspace = [
      "Expressjs",
      "reactjs",
      "Dialogfow",
      "Classification",
      "Git"
    ];
    const doctwin = [
      "JEE",
      "maven",
      "JPA",
      "JSF",
      "EJB",
      ".Net",
      "Angular",
      "MongoDB",
      "Git"
    ];
    const youth = ["Symphony", "MySQL"];
    const esprit = ["JavaFx", "Symphony", "MySQL", "Scrum", "Git"];
    setTimeout(() => {
      this.setState({ show: false });
    }, 100);

    const content = (
      <React.Fragment>
        <div className="wrapper">
          <div className="section started">
            <div className="centrize full-width">
              <div className="vertical-center">
                <div className="started-content">
                  <GlitchEffect>
                    <div
                      className="h-title glitch-effect"
                      data-text="PORTFOLIO"
                    >
                      PORTFOLIO
                    </div>
                  </GlitchEffect>
                  <p>
                    <Link to="/">Home</Link> /{" "}
                    <Link to="/portfolio">Portfolio</Link>
                  </p>
                </div>
              </div>
            </div>

            <animateScroll.Link
              activeClass="active"
              to="portfolio"
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
              <span className="ion ion-mouse"/>
            </animateScroll.Link>
          </div>

          {/* Works */}
          <div className="section works" id="portfolio">
            <div className="content">
              <div className="title">
                <div className="title_inner">Projects</div>
              </div>
              <div className="box-items">
                <div className="box-item">
                  <Popup
                    contentStyle={{ width: "600px" }}
                    trigger={
                      <div>
                        <div className="image">
                          <a href="#formalab" className="has-popup">
                            <img src={process.env.PUBLIC_URL+'/images/formalab.png'} alt="Formalab" />
                            <span className="info">
                              <span className="centrize full-width">
                                <span className="vertical-center">
                                  <span className="ion ion-ios-plus-empty"/>
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <div className="category">Training Center | FormaLab</div>
                        </div>
                      </div>
                    }
                    modal
                    closeOnDocumentClick
                  >
                    <div>
                      <div className="popup-box mfp-fade">
                        <div className="content">
                          <div className="image">
                            <img src={process.env.PUBLIC_URL+'/images/formalab.png'} alt="img" />
                          </div>
                          <div className="desc">
                            <div className="category"/>
                            <h4>Formalab</h4>
                            <p
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                            >
                              Technologies:{" "}
                            </p>

                            <ReactTypingEffect
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                              speed={50}
                              typingDelay={800}
                              eraseDelay={800}
                              text={formalab}
                            />
                            <p>
                              Development of a new comfortable platform that
                              facilitates training management for trainers.
                            </p>
                            <a
                              href="https://github.com/MedBenMalek/Formalab"
                              className="btn"
                              data-text="View Project"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
                <div className="box-item">
                  <Popup
                    contentStyle={{ width: "600px" }}
                    trigger={
                      <div>
                        <div className="image">
                          <a href="#IderSpace" className="has-popup">
                            <img src={process.env.PUBLIC_URL+'/images/IderSpace.jpg'} alt="IderSpace" />
                            <span className="info">
                              <span className="centrize full-width">
                                <span className="vertical-center">
                                  <span className="ion ion-ios-plus-empty"/>
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <div className="category">IderSpace</div>
                        </div>
                      </div>
                    }
                    modal
                    closeOnDocumentClick
                  >
                    <div>
                      <div className="popup-box mfp-fade">
                        <div className="content">
                          <div className="image">
                            <img src={process.env.PUBLIC_URL+'/images/IderSpace.jpg'} alt="img" />
                          </div>
                          <div className="desc">
                            <div className="category"/>
                            <h4>IderSpace</h4>
                            <p
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                            >
                              Technologies:{" "}
                            </p>

                            <ReactTypingEffect
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                              speed={50}
                              typingDelay={800}
                              eraseDelay={800}
                              text={iderspace}
                            />
                            <p>
                              The goal is to set up a collaborative help
                              solution in the form of a social network. The
                              network will facilitate the collaboration process
                              by generating grouping recommendations based on
                              the task being performed, the history of listed
                              activities, available skills.
                            </p>
                            <a
                              href="https://github.com/achrefsaadouni/IderSpace"
                              className="btn"
                              data-text="View Project"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
                <div className="box-item">
                  <Popup
                    contentStyle={{ width: "600px" }}
                    trigger={
                      <div>
                        <div className="image">
                          <a href="#DocTwin" className="has-popup">
                            <img src={process.env.PUBLIC_URL+'/images/doctwin.jpg'} alt="" />
                            <span className="info">
                              <span className="centrize full-width">
                                <span className="vertical-center">
                                  <span className="ion ion-ios-plus-empty"/>
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <div className="category">DocTwin</div>
                        </div>
                      </div>
                    }
                    modal
                    closeOnDocumentClick
                  >
                    <div>
                      <div className="popup-box mfp-fade">
                        <div className="content">
                          <div className="image">
                            <img src={process.env.PUBLIC_URL+'/images/doctwin.jpg'} alt="img" />
                          </div>
                          <div className="desc">
                            <div className="category"/>
                            <h4>DocTwin</h4>
                            <p
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                            >
                              Technologies:{" "}
                            </p>

                            <ReactTypingEffect
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                              speed={50}
                              typingDelay={800}
                              eraseDelay={800}
                              text={doctwin}
                            />
                            <p>
                              Development of a multiplatform application for
                              making medical appointments with an intelligent
                              adjustment of appointments in case of withdrawal
                              of the patient.
                            </p>
                            <a
                              href="https://github.com/MedBenMalek/EpioneAngular"
                              className="btn"
                              data-text="View Project"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
                <div className="box-item">
                  <Popup
                    contentStyle={{ width: "600px" }}
                    trigger={
                      <div>
                        <div className="image">
                          <a href="#formalab" className="has-popup">
                            <img src={process.env.PUBLIC_URL+'/images/youth.jpg'} alt="" />
                            <span className="info">
                              <span className="centrize full-width">
                                <span className="vertical-center">
                                  <span className="ion ion-ios-plus-empty"/>
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <div className="category">Youth Township</div>
                        </div>
                      </div>
                    }
                    modal
                    closeOnDocumentClick
                  >
                    <div>
                      <div className="popup-box mfp-fade">
                        <div className="content">
                          <div className="image">
                            <img src={process.env.PUBLIC_URL+'/images/youth.jpg'} alt="Youth" />
                          </div>
                          <div className="desc">
                            <div className="category"/>
                            <h4>Youth Township</h4>
                            <p
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                            >
                              Technologies:{" "}
                            </p>

                            <ReactTypingEffect
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                              speed={50}
                              typingDelay={800}
                              eraseDelay={800}
                              text={youth}
                            />
                            <p>
                              Platform to evaluate the work of municipalities
                              after the elections.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
                <div className="box-item">
                  <Popup
                    contentStyle={{ width: "600px" }}
                    trigger={
                      <div>
                        <div className="image">
                          <a href="#formalab" className="has-popup">
                            <img
                              src={process.env.PUBLIC_URL+'/images/esprit.jpg'}
                              alt="esprit entre'aid"
                            />
                            <span className="info">
                              <span className="centrize full-width">
                                <span className="vertical-center">
                                  <span className="ion ion-ios-plus-empty"/>
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                        <div className="desc">
                          <div className="category">Esprit entre'aid</div>
                        </div>
                      </div>
                    }
                    modal
                    closeOnDocumentClick
                  >
                    <div>
                      <div className="popup-box mfp-fade">
                        <div className="content">
                          <div className="image">
                            <img src={process.env.PUBLIC_URL+'/images/esprit.jpg'} alt="img" />
                          </div>
                          <div className="desc">
                            <div className="category"/>
                            <h4>Esprit entre'aid</h4>
                            <p
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                            >
                              Technologies:{" "}
                            </p>

                            <ReactTypingEffect
                              style={{
                                color: "#43656f",
                                fontSize: "10px",
                                display: "inline"
                              }}
                              speed={50}
                              typingDelay={800}
                              eraseDelay={800}
                              text={esprit}
                            />
                            <p>
                              Development of a multiplatform application that
                              facilitates communication and strengthens the
                              relationship between the company and the student.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Popup>
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );

    return (
      <React.Fragment>
        {this.state.show ? <Preloader /> : content}
      </React.Fragment>
    );
  }
}
