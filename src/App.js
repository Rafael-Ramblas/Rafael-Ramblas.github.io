import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxCollapse from './components/BoxCollapse';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <BoxCollapse>EAE RAPAZEADA</BoxCollapse>
                </header>
            </div>
        );
    }
}

export default App;
