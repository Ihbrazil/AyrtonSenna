import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import imgCapa from "../../assets/images/foto-capa.jpg";
import imgPreparacao from "../../assets/images/preparacao.png";
import imgReiDaChuva from "../../assets/images/rei-da-chuva.png";
import imgReiDeMonaco from "../../assets/images/rei-de-monaco.png";
import imgSilvaStone from "../../assets/images/silvastone.png";

import estilos from './estilos';

export default function TelaSobre() {
  return (
    <View style={ estilos.container }>
        <View>
            <Text style={ estilos.titulo }>Ayrton Senna</Text>
            <Image source={ imgCapa } style={ estilos.imgCapa}/>
            <Text style={ estilos.paragrafo }>No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.</Text>
        </View>
        <ScrollView>
            <View style={ estilos.card}>
                <Image source={ imgReiDaChuva} style={ estilos.imgCard}/>
                
                <View style={ estilos.textosCard}>
                    <Text style={ estilos.tituloCard}>Rei da chuva</Text>
                    <Text>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.</Text>
                </View>
            </View>
            <View style={ estilos.card}>
                <Image source={ imgReiDeMonaco} style={ estilos.imgCard}/>
                <View style={ estilos.textosCard}>
                    <Text style={ estilos.tituloCard}>Rei da Mônaco</Text>
                    <Text>Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.</Text>
                </View>
            </View>
            <View style={ estilos.card}>
                <Image source={ imgSilvaStone} style={ estilos.imgCard}/>
                <View style={ estilos.textosCard}>
                    <Text style={ estilos.tituloCard}>Silvastone</Text>
                    <Text>Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.</Text>
                </View>
            </View>
            <View style={ estilos.card}>
                <Image source={ imgPreparacao} style={ estilos.imgCard}/>
                <View style={ estilos.textosCard}>
                    <Text style={ estilos.tituloCard}>Preparação</Text>
                    <Text>Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
                </View>
            </View>
        </ScrollView>
    </View>
  );
}