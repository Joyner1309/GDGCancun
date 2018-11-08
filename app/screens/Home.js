
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity, Image} from 'react-native';


export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("./../images/gobmxlogo.png")}style={styles.logo}/>
                <Text style={styles.txt}>Bienvenido a esta aplicacion donde podras solicitar una copia valida de tu Acta.</Text>
                <TouchableOpacity
                                  style={styles.btn_continue}
                                  onPress={()=>this.props.navigation.navigate('MenuPage')}
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
        width: '100%',
    },
    contentBtn:{
        width: '100%',
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
