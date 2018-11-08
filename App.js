
import React, {Component} from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import Home from "./app/screens/Home";
import Matrimonio from "./app/screens/Matrimonio";
import Divorcio from "./app/screens/Divorcio";
import Reconocimiento from "./app/screens/Reconocimiento";
import Menu from "./app/screens/Menu";
import Adopciones from "./app/screens/Adopciones";
import Defuncion from "./app/screens/Defuncion";
import Nacimiento from "./app/screens/Nacimiento";




export default class App extends Component {
    constructor(){
        super();
    }
  render() {
    return (
        <Nacimiento/>
    );
  }
}
const Navegation = createStackNavigator({
    HomePage: {screen:Home,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }},
        MenuPage: {screen:Menu,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#282a2b"
            },
                headerTitleStyle: {
                    fontWeight: "bold",
                    color: "#fff",

                },
                headerTintColor: "#fff",
            animationEnabled: true,
            headerLeft: null,
            title:'Inicio',
            headerRight: (
                <Image source={require("./app/images/gobmxlogoH.png")}/>
            ),

        }},
    NacimientoPage: {screen:Nacimiento,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#282a2b"
            },
            headerTitleStyle: {
                fontWeight: "bold",
                color: "#fff",

            },
            headerTintColor: "#fff",
            animationEnabled: true,
            title:'Acta de Nacimiento',
            headerRight: (
                <Image source={require("./app/images/gobmxlogoH.png")}/>
            ),
        }},

    MatrimonioPage: {screen:Matrimonio,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }},
    DivorcioPage: {screen:Divorcio,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }},
    ReconocimientoPage: {screen:Reconocimiento,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }},
    AdopcionesPage: {screen:Adopciones,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }},
    DefuncionPage: {screen:Defuncion,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }},

},{initialRouteName: 'HomePage'});

