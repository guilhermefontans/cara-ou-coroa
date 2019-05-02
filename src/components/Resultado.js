import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {

    constructor(props) {
        super(props);
        this.state = { resultado: '' };
    }

    componentWillMount(): void {
        const numeroAleatorio = Math.floor(Math.random() * 2);
        let caraOuCoroa = 'cara';

        if (numeroAleatorio === 0) {
            caraOuCoroa = 'coroa';
        }
        this.setState({resultado: caraOuCoroa})
    }

    render() {
        let imagem = this.state.resultado === 'cara' ? cara : coroa;
        return (
            <View style={styles.resultado}>
                <Image source={imagem}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    resultado: {
        flex: 1,
        backgroundColor: '#61BD8C',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
