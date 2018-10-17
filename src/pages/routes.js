import React from 'react';
import PropTypes from 'prop-types';
import App from "../components/app/App";
import {BrowserRouter as Router, Route } from "react-router-dom";
import {ABOUT, HOME} from "./routes.constants";
import Home from "./home/home";
import About from "./about/about";

const AppRoutes = props => {
    return (
        <Router>
            <App>
                <Route exact path={HOME} component={Home} />
                <Route path={ABOUT} component={About} />
            </App>
        </Router>
    );
};

AppRoutes.propTypes = {};

export default AppRoutes;
