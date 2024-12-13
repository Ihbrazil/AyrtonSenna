import React from 'react';
import { Text, View, ScrollView, Image, ImageBackground } from 'react-native';

import imgCorrida from "../../assets/images/corrida1.jpg";
import imgVitotia1 from "../../assets/images/vitoria1.jpg";
import imgVitotia2 from "../../assets/images/vitoria2.jpg";
import imgVitotia3 from "../../assets/images/vitoria3.jpg";

import { FontAwesome5  } from '@expo/vector-icons';
import estilos from './estilos';

export default function TelaVitorias() {
  return (
    <ScrollView>
        <ImageBackground
            source={ imgCorrida }
            style={estilos.container }
            blurRadius={ 5 }
        >

            <View style={ estilos.containerResultados}>
                
                <Text style={ estilos.tituloResultados}>Senna em Números</Text>
                <Text style={ estilos.paragrafoResultados}>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>
                
                <View style={ estilos.imgTrofeu }>
                    <FontAwesome5
                        name="trophy"
                        color="#ceb105"
                        size={25}
                    />
                    <Text style={ estilos.numeroResultados}>161</Text>
                    <Text style={ estilos.textoResultados}>GPS DISPUTADOS</Text>
                </View>
                
                <View style={ estilos.imgTrofeu }>
                <FontAwesome5
                        name="trophy"
                        color="#ceb105"
                        size={25}
                    />
                    <Text style={ estilos.numeroResultados}>65</Text>
                    <Text style={ estilos.textoResultados}>POLE POSITIONS</Text>
                </View>

                <View style={ estilos.imgTrofeu }>
                <FontAwesome5
                        name="trophy"
                        color="#ceb105"
                        size={25}
                    />
                    <Text style={ estilos.numeroResultados}>41</Text>
                    <Text style={ estilos.textoResultados}>VITÓRIAS</Text>
                </View>
                
                <View style={ estilos.imgTrofeu }>
                <FontAwesome5
                        name="trophy"
                        color="#ceb105"
                        size={25}
                    />
                    <Text style={ estilos.numeroResultados}>3X</Text>
                    <Text style={ estilos.textoResultados}>CAMPEÃO MUNDIAL</Text>
                </View>

            </View>

            <View style={ estilos.card}>
                <Text style={ estilos.textoCard}>Campeonato Mundial - 1988</Text>
                <Image source={ imgVitotia1 } style={ estilos.imgCard }/>
            </View>

            <View style={ estilos.card}>
                <Text style={ estilos.textoCard}>Campeonato Mundial - 1990</Text>
                <Image source={ imgVitotia2 } style={ estilos.imgCard }/>
            </View>

            <View style={ estilos.card}>
                <Text style={ estilos.textoCard}>Campeonato Mundial - 1991</Text>
                <Image source={ imgVitotia3 } style={ estilos.imgCard }/>
            </View>

        </ImageBackground>
    </ScrollView>
  );
}