import React, { Component } from 'react';


import Main from '../Main';
import GlobalStyles from '../../assets/styles/global';

export default class App extends Component {
    render() {
        return (
            <div>
                <Main />
                <GlobalStyles />
            </div>
        );
    }
}