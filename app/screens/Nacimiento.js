
import React, {Component} from 'react';
import {StyleSheet, Text, View,Picker,TouchableOpacity,CheckBox} from 'react-native';
import {Icon,Input,Item,DatePicker,ListItem,Body}from 'native-base';

export default class Nacimiento extends Component {
    constructor(props){
        super(props);
        this.state={
            selected:'B1',
            hombre:false,
            mujer:false
        }
    }
swichtSexo(type){
        if (type == 'hombre'){
            this.setState=({hombre:true,mujer:false})
        } else{
            this.setState=({mujer:true,hombre:false})
        }
}
    Form(){
        if(this.state.selected === 'B1'){
            return(
                <View>
                    <Text>Ingrese una CURP valida:</Text>
                    <Item>
                    <Input placeholder='ejemplo curp xxxxxxxxxxxxxxxxx'/>
                    </Item>

                    <View style={{position:'relative'}}>
                        <TouchableOpacity style={styles.btn_continueF}>
                            <Text style={styles.txtBtn}>Buscar</Text>
                        </TouchableOpacity >
                    </View>

                </View>
            );
        } else if(this.state.selected === 'B2'){
            return(
                <View>
                    <Text>Ingrese una cadena digital valida:</Text>
                    <Item>
                        <Input placeholder='ejemplo cadena xxxxxxxxx'/>
                    </Item>
                    <View style={{position:'relative'}}>
                        <TouchableOpacity style={styles.btn_continueF}>
                            <Text style={styles.txtBtn}>Buscar</Text>
                        </TouchableOpacity >
                    </View>
                </View>
            );
        } else if(this.state.selected === 'B3'){
            return(
                <View>
                    <View style={styles.cont_input}>
                        <Text style={styles.label}>Nombre(s):</Text>
                        <Item>
                            <Input placeholder='ejemplo Menganito' style={styles.input}/>
                        </Item>
                    </View>

                    <View style={styles.cont_input}>
                        <Text>Primer Apellido:</Text>
                        <Item>
                            <Input placeholder='ejemplo Menganito' style={styles.input}/>
                        </Item>
                    </View>

                    <View style={styles.cont_input}>
                        <Text>Segundo Apellido:</Text>
                        <Item>
                            <Input placeholder='ejemplo Menganito' style={styles.input}/>
                        </Item>
                    </View>

                    <View style={styles.cont_input}>
                        <Text>Fecha de nacimiento:</Text>
                        <Item>
                            <DatePicker
                            defaultDate={new Date(2018, 4, 4)}
                            maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            />
                        </Item>
                    </View>
                    <View style={styles.cont_input}>
                        <CheckBox  value={this.state.hombre} onValueChange={() =>this.swichtSexo('hombre')}/>
                        <Text>Hombre</Text>
                    </View>
                    <View style={styles.cont_input}>
                        <CheckBox  value={this.state.mujer} onValueChange={() =>this.swichtSexo('mujer')}/>
                        <Text>mujer</Text>
                    </View>
                    <View style={{position:'relative'}}>
                        <TouchableOpacity style={styles.btn_continueF}>
                            <Text style={styles.txtBtn}>Buscar</Text>
                        </TouchableOpacity >
                    </View>
                </View>
            );
        }
    }

    render(){
        console.log(this.state.hombre)
        return(
            <View style={styles.container}>
                <View style={styles.contentBtn}>
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
                </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:15,
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
        position:'absolute',
        right:0,paddingHorizontal:15,
        paddingVertical:10,
        textAlign:'center',

    },
    txtBtn:{
        color:'#fff',
    },
    margin_top:{
        marginTop:25
    },
    cont_input:{
        paddingBottom:10,
    },
    input:{
        fontSize:13,
        color:'#eeeeee',
    }
});
