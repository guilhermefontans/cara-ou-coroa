import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from "./src/components/Principal";
import SobreJogo from "./src/components/SobreJogo";
import OutrosJogos from "./src/components/OutrosJogos";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key='principal' component={Principal} title="ola" initial />
                    <Scene key='sobreJogo' component={SobreJogo} />
                    <Scene key='outrosJogos' component={OutrosJogos}/>
                </Scene>
            </Router>
        );
    }
}