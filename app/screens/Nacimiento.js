
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

    irTramite(){
        switch (this.state.selected){
            case '':
                this.props.navigation.navigate("MatrimonioPage");
                break;
            case '':
                break;
            case '':
                break;
        }
    }

    render() {
        console.log(this.state.selected);
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
                        <Picker.Item label="Acta de Nacimiento" value="key0" />
                        <Picker.Item label="Acta de Defuncion" value="key1" />
                        <Picker.Item label="Acta de Matrimonio" value="key2" />
                        <Picker.Item label="Acta de Divorcios" value="key3" />
                        <Picker.Item label="Acta de Adopciones" value="key4" />
                        <Picker.Item label="Acta de Reconocimiento" value="key4" />
                    </Picker>
                </Content>
                <Content style={styles.contentBtn}>
                    <TouchableOpacity style={styles.btn_continueF}
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
        marginRight:0,
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
