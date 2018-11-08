
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Picker} from 'react-native';
import {Icon,Content}from 'native-base';

export default class Nacimiento extends Component {
    constructor(props){
        super(props);
        this.state={
            selected:''
        }
    }

    Form(){
        if(this.state.selected === 'B1'){
            return(
                <View>
                    <Text>Ingrese una CURP valida:</Text>
                    <TouchableOpacity style={styles.btn_continueF}
                    >
                        <Text style={styles.txtBtn}>Buscar</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if(this.state.selected === 'B2'){
            return(
                <View>
                    <Text>Ingrese una cadena digital valida:</Text>
                    <TouchableOpacity style={styles.btn_continueF}
                    >
                        <Text style={styles.txtBtn}>Buscar</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if(this.state.selected === 'B3'){
            return(
                <View>
                    <Text>Ingrese una tus datos personales validos:</Text>
                    <TouchableOpacity style={styles.btn_continueF}
                    >
                        <Text style={styles.txtBtn}>Buscar</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Content style={styles.contentBtn}>
                    <Text style={styles.margin_top}>Como desea realizar la busqueda de su acta?</Text>
                    <Picker
                        mode="dropdown"
                        iosHeader="Select your SIM"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ width: '100%'}}
                        selectedValue={this.state.selected}
                        onValueChange={(itemValue, itemIndex) => this.setState({selected:itemValue})}
                    >
                        <Picker.Item label="Seleccione una opcion de busqueda" />
                        <Picker.Item label="CURP" value="B1" />
                        <Picker.Item label="Cadena Digital" value="B2" />
                        <Picker.Item label="Datos Personales" value="B3" />
                    </Picker>

                    {this.Form()}
                </Content>

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
    btn_continueF: {
        width: 80,
        backgroundColor: '#ff0000',
        borderRadius:5,
        marginRight:0,
        marginTop:25,
    },
    txtBtn:{
        paddingHorizontal:15,
        paddingVertical:10,
        textAlign:'center',
        color:'#fff',
    },
    margin_top:{
        marginTop:25
    }
});
