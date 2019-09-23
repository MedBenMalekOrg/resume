import React, { Component } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/links";
import Resume from "./components/resume";
import Error404 from "./components/error/error404";
import Preloader from "./components/common/preloader";
import Porfolio from "./components/portfolio";
import Blog from "./components/blog";
import Post from "./components/blog/post";
import Contact from "./components/contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/p" component={Preloader} />
            <Route exact path="/" component={Resume} />
            <Route exact path="/portfolio" component={Porfolio} />
            <Route path="/blog/:id" exact component={Post} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/contact" exact component={Contact} />
            <Route path="*" component={Error404} />
            <Route path="*" component={Error404} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
