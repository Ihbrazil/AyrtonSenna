import React from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';

import estilos from "./estilos";

import imgCapa from "../../assets/images/foto-capa.jpg";
import imgFundo from "../../assets/images/fundo.jpg";

export default function TelaInicio() {
  return (
    <ImageBackground
        blurRadius={ 5 }
        source={imgFundo}
        style={ estilos.container }
    >
        <Image source={imgCapa} style={ estilos.imgCapa }/>
        <View style={ estilos.containerTexto }>
            <Text style={ estilos.titulo }>Ayrton Senna</Text>
            <Text style={ estilos.paragrafo }>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
        </View>
    </ImageBackground>
  );
}