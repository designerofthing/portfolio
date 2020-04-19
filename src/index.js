import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import CV from './CV';
import Education from "./Education";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import About from "./About";
import { Switch, Route, BrowserRouter } from "react-router-dom"


const App = () => {
  return(
    <div>
        <Header />
        <Switch>
            <Route exact path = "/" component = {Hello}></Route>
            <Route exact path = "/about" component = {About}></Route>
            <Route exact path = "/projects" component = {Projects}></Route>
            <Route exact path = "/cv" component = {CV}></Route>
            <Route exact path = "/cv/education" component = {Education}></Route>
            <Route exact path = "/cv/workhistory" component = {WorkHistory}></Route>
            <Route exact path = "/cv/skills" component = {Skills}></Route>
        </Switch>
        <Footer />
    </div>
  );
};

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById("app")
);