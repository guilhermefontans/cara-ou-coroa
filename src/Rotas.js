import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Principal from "./components/Principal";
import SobreJogo from "./components/SobreJogo";
import OutrosJogos from "./components/OutrosJogos";
import Resultado from "./components/Resultado";

const Rotas = () => (
    <Router>
        <Scene hideNavBar key="root">
            <Scene key='principal' component={Principal} initial />
            <Scene key='sobreJogo' component={SobreJogo} />
            <Scene key='outrosJogos' component={OutrosJogos} />
            <Scene key='resultado' component={Resultado} />
        </Scene>
    </Router>
);

export default Rotas;