import React, { Component } from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/links";
import Resume from "./components/resume";
import Preloader from "./components/common/preloader";
import Porfolio from "./components/portfolio";
import Blog from "./components/blog";
import Post from "./components/blog/post";
import Contact from "./components/contact";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

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
            <Route path="*" >
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
