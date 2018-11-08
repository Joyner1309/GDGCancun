
import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,Picker} from 'react-native';
import {Icon,Content}from 'native-base';

export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            selected:''
        }
    }

    irTramite(){
        console.log(this.state.selected);
        switch (this.state.selected){
            case '1':
                this.props.navigation.navigate("NacimientoPage");
            break;
            case '2':
                this.props.navigation.navigate("DefuncionPage");
            break;
            case '3':
                this.props.navigation.navigate("MatrimonioPage");
            break;
            case '4':
                this.props.navigation.navigate("DivorcioPage");
            break;
            case '5':
                this.props.navigation.navigate("AdopcionesPage");
            break;
            case '6':
                this.props.navigation.navigate("ReconocidosPage");
            break;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Content style={styles.contentBtn}>
                <Text style={styles.margin_top}>Que tipo de tramite quiere realizar?</Text>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: '100%'}}
                    selectedValue={this.state.selected}
                    onValueChange={(itemValue, itemIndex) => this.setState({selected:itemValue})}
                >
                    <Picker.Item label="Seleccione una Solicitud" />
                    <Picker.Item label="Acta de Nacimiento" value="1" />
                    <Picker.Item label="Acta de Defuncion" value="2" />
                    <Picker.Item label="Acta de Matrimonio" value="3" />
                    <Picker.Item label="Acta de Divorcios" value="4" />
                    <Picker.Item label="Acta de Adopciones" value="5" />
                    <Picker.Item label="Acta de Reconocimiento" value="6" />
                </Picker>
                    <TouchableOpacity style={styles.btn_continueF}
                                      onPress={()=>this.irTramite()}
                    >
                        <Text style={styles.txtBtn}>Buscar</Text>
                    </TouchableOpacity>
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
