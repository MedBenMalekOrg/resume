import React, { Component } from "react";
import { Link } from "react-router-dom";
import animateScroll from "react-scroll";
import TextField from "../common/textField";
import TextareaField from "../common/textareaField";

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      message: "",
      errors: {}
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { email, name, message } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (message === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    console.log(email + " " + name + " " + message);

    this.setState({
      name: "",
      email: "",
      message: "",
      errors: {}
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, errors } = this.state;
    const content = (
      <div className="wrapper">
        {/* Started */}
        <div className="section started">
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <div className="h-title glitch-effect" data-text="Contacts">
                  Contacts
                </div>
                <div className="h-subtitle typing-bread">
                  <p>
                    <Link to="index.html">Home</Link> /{" "}
                    <Link to="contacts.html">Contacts</Link>
                  </p>
                </div>
                <span className="typed-bread" />
              </div>
            </div>
          </div>
          <animateScroll.Link
            activeClass="active"
            to="contact"
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

        {/* Contacts Info */}
        <div className="section contacts" id="contact">
          <div className="content">
            <div className="title">
              <div className="title_inner">Contacts</div>
            </div>
            <div className="service-items">
              <div className="service-item">
                <div className="icon">
                  <span className="ion ion-android-phone-portrait" />
                </div>
                <div className="name">Phone</div>
                <p>+ (216) 98 786 131</p>
              </div>
              <div className="service-item">
                <div className="icon">
                  <span className="ion ion-email" />
                </div>
                <div className="name">Email</div>
                <p>
                  <a href="mailto:steve-pearson@gmail.com">
                    benmalekchrif@gmail.com
                  </a>
                </p>
              </div>
              <div className="service-item">
                <div className="icon">
                  <span className="ion ion-ios-location" />
                </div>
                <div className="name">Address</div>
                <p>Tunisia, Tunis</p>
              </div>
            </div>
            <div className="contact_form">
              <form onSubmit={this.onSubmit}>
                <TextField
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextField
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextareaField
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={this.onChange}
                  error={errors.message}
                />

                <input
                  type="submit"
                  value="Send Message"
                  className="btn fill"
                />
              </form>
              <div className="alert-success">
                <p>
                  Thanks, your message is sent successfully. We will contact you
                  shortly!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return <div>{content}</div>;
  }
}
