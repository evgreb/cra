import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Button from "@material-ui/core/Button/Button";
import styles from './App.module.css';
import {Link} from "react-router-dom";
import {ABOUT, HOME} from "../../pages/routes.constants";

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <AppBar>
                    <Toolbar>
                        <Link to={HOME}>
                            <Button color="white">
                                Home
                            </Button>
                        </Link>
                        <Link to={ABOUT}>
                            <Button color="white">
                                About
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <main className={styles.main}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default App;
