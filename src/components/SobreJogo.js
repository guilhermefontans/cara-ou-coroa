import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default class SobreJogo extends Component {
    render() {
        return (
            <Text style={styles.mensagem}>
                Aqui podem ser apresentadas informações sobre o jogo
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    mensagem: {
        flex: 1,
        backgroundColor: '#61BD8C',
    }
});
