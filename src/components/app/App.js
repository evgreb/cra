import React, {Component} from 'react';
import styles from './App.module.css';

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <h1 className={styles.h1}>Hello World</h1>
                </header>
            </div>
        );
    }
}

export default App;
