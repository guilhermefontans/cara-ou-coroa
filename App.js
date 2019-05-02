import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from "./src/components/Principal";
import SobreJogo from "./src/components/SobreJogo";
import OutrosJogos from "./src/components/OutrosJogos";
import Resultado from "./src/components/Resultado";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene hideNavBar key="root">
                    <Scene key='principal' component={Principal} initial />
                    <Scene key='sobreJogo' component={SobreJogo} />
                    <Scene key='outrosJogos' component={OutrosJogos} />
                    <Scene key='resultado' component={Resultado} />
                </Scene>
            </Router>
        );
    }
}