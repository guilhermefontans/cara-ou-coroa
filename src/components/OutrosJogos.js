import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';

export default class OutrosJogos extends Component {
    render() {
        return (
            <Text style={styles.mensagem}>
                Aqui podem ser apresentadas informações sobre outros jogos do desenvolvedor.
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
