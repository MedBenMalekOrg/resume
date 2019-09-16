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
                <div className="h-title glitch-effect" data-text="Blog">
                  Blog
                </div>
                <div className="h-subtitle typing-bread">
                  <p>
                    <Link to="/">Home</Link> / <Link to="/blog">Blog</Link>
                  </p>
                </div>
                <span className="typed-bread" />
              </div>
            </div>
          </div>
          <animateScroll.Link
            activeClass="active"
            to="blog"
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
        {/* Blog */}
        <div className="section blog" id="blog">
          <div className="content">
            <div className="title">
              <div className="title_inner">Latest Posts</div>
            </div>
            <div className="box-items">
              <div className="box-item">
                <div className="image">
                  <Link to="/blog/1">
                    <img src="images/works/work1.jpg" alt="img" />
                    <span className="info">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="ion ion-ios-book-outline" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="desc">
                  <div className="date">14 June 2016</div>
                  <Link to="blog_inner.html" className="name">
                    Designing the perfect notification UX
                  </Link>
                </div>
              </div>
              <div className="box-item">
                <div className="image">
                  <Link to="/blog/1">
                    <img src="images/works/work2.jpg" alt="img" />
                    <span className="info">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="ion ion-ios-book-outline" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="desc">
                  <div className="date">14 June 2016</div>
                  <Link to="blog_inner.html" className="name">
                    Designing the perfect notification UX
                  </Link>
                </div>
              </div>
              <div className="box-item">
                <div className="image">
                  <Link to="blog_inner.html">
                    <img src="images/works/work3.jpg" alt="img" />
                    <span className="info">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="ion ion-ios-book-outline" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="desc">
                  <div className="date">14 June 2016</div>
                  <Link to="blog_inner.html" className="name">
                    Designing the perfect notification UX
                  </Link>
                </div>
              </div>
              <div className="box-item">
                <div className="image">
                  <Link to="blog_inner.html">
                    <img src="images/works/work4.jpg" alt="img" />
                    <span className="info">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="ion ion-ios-book-outline" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="desc">
                  <div className="date">14 June 2016</div>
                  <Link to="blog_inner.html" className="name">
                    Designing the perfect notification UX
                  </Link>
                </div>
              </div>
              <div className="box-item">
                <div className="image">
                  <Link to="blog_inner.html">
                    <img src="images/works/work5.jpg" alt="img" />
                    <span className="info">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="ion ion-ios-book-outline" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="desc">
                  <div className="date">14 June 2016</div>
                  <Link to="blog_inner.html" className="name">
                    Designing the perfect notification UX
                  </Link>
                </div>
              </div>
              <div className="box-item">
                <div className="image">
                  <Link to="blog_inner.html">
                    <img src="images/works/work6.jpg" alt="img" />
                    <span className="info">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="ion ion-ios-book-outline" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="desc">
                  <div className="date">14 June 2016</div>
                  <Link to="blog_inner.html" className="name">
                    Designing the perfect notification UX
                  </Link>
                </div>
              </div>
              <div className="box-item">
                <div className="image">
                  <Link to="blog_inner.html">
                    <img src="images/works/work7.jpg" alt="img" />
                    <span className="info">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="ion ion-ios-book-outline" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="desc">
                  <div className="date">14 June 2016</div>
                  <Link to="blog_inner.html" className="name">
                    Designing the perfect notification UX
                  </Link>
                </div>
              </div>
              <div className="box-item">
                <div className="image">
                  <Link to="blog_inner.html">
                    <img src="images/works/work8.jpg" alt="img" />
                    <span className="info">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="ion ion-ios-book-outline" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="desc">
                  <div className="date">14 June 2016</div>
                  <Link to="blog_inner.html" className="name">
                    Designing the perfect notification UX
                  </Link>
                </div>
              </div>
              <div className="box-item">
                <div className="image">
                  <Link to="blog_inner.html">
                    <img src="images/works/work9.jpg" alt="img" />
                    <span className="info">
                      <span className="centrize full-width">
                        <span className="vertical-center">
                          <span className="ion ion-ios-book-outline" />
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="desc">
                  <div className="date">14 June 2016</div>
                  <Link to="blog_inner.html" className="name">
                    Designing the perfect notification UX
                  </Link>
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>
      </div>
    );
    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default index;
