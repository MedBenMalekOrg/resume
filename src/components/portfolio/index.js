import React, { Component } from "react";
import GlitchEffect from "react-glitch-effect";
import { Link } from "react-router-dom";
import animateScroll from "react-scroll";
import Preloader from "../common/preloader";
import Modal from "react-modal";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      popup: false,
      modalIsOpen: false,
      portfolio: [
        {
          text:
            "Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.",
          category: "MOCKUPS1",
          title: "CANVAS TOTE BAG MOCKUP",
          img: "images/works/work1.jpg"
        },
        {
          text:
            "Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.",
          category: "MOCKUPS2",
          title: "CANVAS TOTE BAG MOCKUP",
          img: "images/works/work1.jpg"
        },
        {
          text:
            "Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.",
          category: "MOCKUPS3",
          title: "CANVAS TOTE BAG MOCKUP",
          img: "images/works/work1.jpg"
        }
      ]
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleScroll = to => {
    console.log(to);
  };

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
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
              <span className="ion ion-mouse"></span>
            </animateScroll.Link>
          </div>

          {/* Works */}
          <div className="section works" id="portfolio">
            <div className="content">
              <div className="title">
                <div className="title_inner">Recent Works</div>
              </div>
              <div className="filter-menu">
                <div className="filters">
                  <div className="btn-group">
                    <label data-text="Nature">
                      <input type="checkbox" defaultValue="f-graphic" />
                      Graphics
                    </label>
                    <label data-text="Illustration">
                      <input type="checkbox" defaultValue="f-illustration" />
                      Illustration
                    </label>
                    <label data-text="Photography">
                      <input type="checkbox" defaultValue="f-photo" />
                      Photography
                    </label>
                    <label data-text="Mockups">
                      <input type="checkbox" defaultValue="f-mockups" />
                      Mockups
                    </label>
                  </div>
                </div>
              </div>
              <div className="box-items">
                <div className="box-item f-mockups" onClick={this.openModal}>
                  <div className="image">
                    <Link to="#popup-1" className="has-popup">
                      <img src="images/works/work1.jpg" alt="img" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="ion ion-ios-plus-empty" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category">Mockups</div>
                    <Link to="#popup-1" className="name has-popup">
                      Canvas Tote Bag MockUp
                    </Link>
                  </div>
                </div>
                <div
                  className=""
                  tabIndex={-1}
                  style={{ overflow: "hidden auto" }}
                >
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    shouldCloseOnEsc={true}
                    shouldReturnFocusAfterClose={true}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="popup-box mfp-fade"
                    overlayClassName="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready"
                  >
                    <div className="mfp-bg mfp-fade mfp-ready" />
                    <div className="mfp-container mfp-s-ready mfp-inline-holder">
                      <div className="mfp-content">
                        <div id="popup-1" className="popup-box mfp-fade">
                          <div className="content">
                            <div className="image">
                              <img src="images/works/work1.jpg" alt="img" />
                            </div>
                            <div className="desc">
                              <div className="category">category</div>
                              <h4>sdfsdfsdf</h4>
                              <p>text</p>
                              <Link
                                to="#"
                                className="btn"
                                data-text="View Project"
                              >
                                View Project
                              </Link>
                            </div>
                          </div>
                          <button
                            title="Close (Esc)"
                            type="button"
                            className="mfp-close"
                            onClick={this.closeModal}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                      <div className="mfp-preloader">Loading...</div>
                    </div>
                  </Modal>
                </div>
                <div className="box-item f-photo">
                  <div className="image">
                    <Link to="#popup-2" className="has-popup">
                      <img src="images/works/work2.jpg" alt="img" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="ion ion-ios-plus-empty" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category">Photography</div>
                    <Link to="#popup-2" className="name has-popup">
                      Coffee Cup In Hand
                    </Link>
                  </div>
                  <div id="popup-2" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src="images/works/work2.jpg" alt="img" />
                      </div>
                      <div className="desc">
                        <div className="category">Photography</div>
                        <h4>Coffee Cup In Hand</h4>
                        <p>
                          Consul latine iudicabit eu vel. Cu has animal eruditi
                          voluptatibus. Eu volumus explicari sed. Mel mutat
                          vituperata suscipiantur et, et fabellas explicari
                          adipiscing quo, no mucius euismod vis. Cu vim quem
                          quod cibo.
                        </p>
                        <Link to="#" className="btn" data-text="View Project">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-item f-illustration">
                  <div className="image">
                    <Link to="#popup-3" className="has-popup">
                      <img src="images/works/work8.jpg" alt="img" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="ion ion-ios-plus-empty" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category">Illustration</div>
                    <Link to="#popup-3" className="name has-popup">
                      Love &amp; Care Ceramic Bottles
                    </Link>
                  </div>
                  <div id="popup-3" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src="images/works/work8.jpg" alt="img" />
                      </div>
                      <div className="desc">
                        <div className="category">Illustration</div>
                        <h4>Love &amp; Care Ceramic Bottles</h4>
                        <p>
                          Consul latine iudicabit eu vel. Cu has animal eruditi
                          voluptatibus. Eu volumus explicari sed. Mel mutat
                          vituperata suscipiantur et, et fabellas explicari
                          adipiscing quo, no mucius euismod vis. Cu vim quem
                          quod cibo.
                        </p>
                        <Link to="#" className="btn" data-text="View Project">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-item f-photo">
                  <div className="image">
                    <Link to="#popup-4" className="has-popup">
                      <img src="images/works/work4.jpg" alt="img" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="ion ion-ios-plus-empty" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category">Photography</div>
                    <Link to="#popup-4" className="name has-popup">
                      Shopping gift bag
                    </Link>
                  </div>
                  <div id="popup-4" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src="images/works/work4.jpg" alt="img" />
                      </div>
                      <div className="desc">
                        <div className="category">Photography</div>
                        <h4>Shopping gift bag</h4>
                        <p>
                          Consul latine iudicabit eu vel. Cu has animal eruditi
                          voluptatibus. Eu volumus explicari sed. Mel mutat
                          vituperata suscipiantur et, et fabellas explicari
                          adipiscing quo, no mucius euismod vis. Cu vim quem
                          quod cibo.
                        </p>
                        <Link to="#" className="btn" data-text="View Project">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-item f-mockups">
                  <div className="image">
                    <Link to="#popup-5" className="has-popup">
                      <img src="images/works/work5.jpg" alt="img" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="ion ion-ios-plus-empty" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category">Mockups</div>
                    <Link to="#popup-5" className="name has-popup">
                      Amore Mio Three Cups
                    </Link>
                  </div>
                  <div id="popup-5" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src="images/works/work5.jpg" alt="img" />
                      </div>
                      <div className="desc">
                        <div className="category">Mockups</div>
                        <h4>Amore Mio Three Cups</h4>
                        <p>
                          Consul latine iudicabit eu vel. Cu has animal eruditi
                          voluptatibus. Eu volumus explicari sed. Mel mutat
                          vituperata suscipiantur et, et fabellas explicari
                          adipiscing quo, no mucius euismod vis. Cu vim quem
                          quod cibo.
                        </p>
                        <Link to="#" className="btn" data-text="View Project">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-item f-illustration">
                  <div className="image">
                    <Link to="#popup-6" className="has-popup">
                      <img src="images/works/work6.jpg" alt="img" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="ion ion-ios-plus-empty" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category">Illustration</div>
                    <Link to="#popup-6" className="name has-popup">
                      Marta Veludo Beautiful Poster
                    </Link>
                  </div>
                  <div id="popup-6" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src="images/works/work6.jpg" alt="img" />
                      </div>
                      <div className="desc">
                        <div className="category">Illustration</div>
                        <h4>Marta Veludo Beautiful Poster</h4>
                        <p>
                          Consul latine iudicabit eu vel. Cu has animal eruditi
                          voluptatibus. Eu volumus explicari sed. Mel mutat
                          vituperata suscipiantur et, et fabellas explicari
                          adipiscing quo, no mucius euismod vis. Cu vim quem
                          quod cibo.
                        </p>
                        <Link to="#" className="btn" data-text="View Project">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-item f-mockups">
                  <div className="image">
                    <Link to="#popup-7" className="has-popup">
                      <img src="images/works/work7.jpg" alt="img" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="ion ion-ios-plus-empty" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category">Mockups</div>
                    <Link to="#popup-7" className="name has-popup">
                      Minimal Poster Frame
                    </Link>
                  </div>
                  <div id="popup-7" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src="images/works/work7.jpg" alt="img" />
                      </div>
                      <div className="desc">
                        <div className="category">Mockups</div>
                        <h4>Minimal Poster Frame</h4>
                        <p>
                          Consul latine iudicabit eu vel. Cu has animal eruditi
                          voluptatibus. Eu volumus explicari sed. Mel mutat
                          vituperata suscipiantur et, et fabellas explicari
                          adipiscing quo, no mucius euismod vis. Cu vim quem
                          quod cibo.
                        </p>
                        <Link to="#" className="btn" data-text="View Project">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-item f-graphic">
                  <div className="image">
                    <Link to="#popup-8" className="has-popup">
                      <img src="images/works/work3.jpg" alt="img" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="ion ion-ios-plus-empty" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category">Graphics</div>
                    <Link to="#popup-8" className="name has-popup">
                      Cardboard Box
                    </Link>
                  </div>
                  <div id="popup-8" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src="images/works/work3.jpg" alt="img" />
                      </div>
                      <div className="desc">
                        <div className="category">Graphics</div>
                        <h4>Cardboard Box</h4>
                        <p>
                          Consul latine iudicabit eu vel. Cu has animal eruditi
                          voluptatibus. Eu volumus explicari sed. Mel mutat
                          vituperata suscipiantur et, et fabellas explicari
                          adipiscing quo, no mucius euismod vis. Cu vim quem
                          quod cibo.
                        </p>
                        <Link to="#" className="btn" data-text="View Project">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-item f-graphic">
                  <div className="image">
                    <Link to="#popup-9" className="has-popup">
                      <img src="images/works/work9.jpg" alt="img" />
                      <span className="info">
                        <span className="centrize full-width">
                          <span className="vertical-center">
                            <span className="ion ion-ios-plus-empty" />
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="desc">
                    <div className="category">Graphics</div>
                    <Link to="#popup-9" className="name has-popup">
                      Hello World Paper
                    </Link>
                  </div>
                  <div id="popup-9" className="popup-box mfp-fade mfp-hide">
                    <div className="content">
                      <div className="image">
                        <img src="images/works/work9.jpg" alt="img" />
                      </div>
                      <div className="desc">
                        <div className="category">Graphics</div>
                        <h4>Hello World Paper</h4>
                        <p>
                          Consul latine iudicabit eu vel. Cu has animal eruditi
                          voluptatibus. Eu volumus explicari sed. Mel mutat
                          vituperata suscipiantur et, et fabellas explicari
                          adipiscing quo, no mucius euismod vis. Cu vim quem
                          quod cibo.
                        </p>
                        <Link to="#" className="btn" data-text="View Project">
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
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
