import React, { Component } from 'react';

import '../../assets/styles/Shared.css';
import Main from '../Main';
import CarsList from '../CarsList';

export default class App extends Component {
    render() {
        return (
            <div>
                <Main />
                <CarsList />
            </div>
        );
    }
}