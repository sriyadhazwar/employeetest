import React, {Component} from 'react';
import './assets/css/App.css';
import {BrowserRouter} from 'react-router-dom';
import Router from "./Router";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="App">
                        <Router/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
