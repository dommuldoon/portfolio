import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";
// import NavBar from "./components/layout/NavBar";
import NotFound from "./components/NotFound";
import Blog from "./components/Blog";
import UtilityBar from "./components/layout/UtilityBar";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <>
        {/* <UtilityBar />
        <NavBar /> */}
        <Header />
        <main className="container">
          <Switch>
            <Route path="/blog" component={Blog} />
            {/* <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} /> */}
            {/* <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={props => <Movies {...props} user={user} />}
            /> */}
            {/* <Route path="/about-us" component={AboutUs} /> */}
            <Route path="/home" component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
