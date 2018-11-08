
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

type Props = {};
export default class Reconocimiento extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>Bienvenido a esta aplicacion donde podras solicitar las siguentes actas:</Text>
                <TouchableOpacity onPress={this._onPressButton}
                                  style={styles.btn_continue}
                >
                    <Text style={styles.txtBtn}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    txt:{
        textAlign:'center',
        marginBottom:50,
    },
    logo:{
        overflow:'visible',
        marginBottom:25,
    },
    btn_continue: {
        width: 80,
        backgroundColor: '#ff0000',
        borderRadius:5,
    },
    txtBtn:{
        paddingHorizontal:15,
        paddingVertical:10,
        textAlign:'center',
        color:'#fff',
    }
});
