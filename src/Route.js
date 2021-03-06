import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Signup from './components/signup';
import Signin from './components/signin';
import Portfolio from './components/portfolio';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from "./components/NavBar";

import Chat from './components/chat';

import history from './History';

// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <MuiThemeProvider>
                    <div>
                        {/* <Route exact path="/" component={Portfolio} /> */}
                        <Route path="/" component={NavBar} />
                        <Route exact path="/" component={Signin} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/signin" component={Signin} />
                        <Route exact path="/chat" component={Chat} />

                    </div>
                </MuiThemeProvider>
            </Router>
        )
    }
}

export default Routers;