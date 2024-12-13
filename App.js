import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons';

import Inicio from './componentes/TelaInicio';
import Sobre from './componentes/TelaSobre';
import Vitorias from './componentes/TelaVitorias';

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Abas.Navigator
         screenOptions={{
          headerStyle:{ 
            backgroundColor: '#eecb01' 
          },
          headerTitleStyle: { 
            color: '#000', 
            fontWeight: 'bold' 
          },
          
          tabBarStyle: { 
            backgroundColor: "#fff",
            height: 60,
          },
          tabBarLabelStyle:{ 
            fontSize: 14, 
            fontWeight: "bold"
          },
          tabBarActiveTintColor: '#ba1711',
          tabBarInactiveTintColor: "#000",
          tabBarActiveBackgroundColor: "#fff",
          tabBarInactiveBackgroundColor: "#eecb01",
        }}
      >
        <Abas.Screen
          name="Início"
          component = { Inicio }
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={20} color={ color } />
            ),
          }}
        />
        <Abas.Screen
          name="Sobre"
          component = { Sobre }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="question-circle" size={20} color={ color } />
            ),
          }}
        />
        <Abas.Screen
          name="Vitórias"
          component = { Vitorias }
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="trophy" size={20} color={ color } />
            ),
          }} />
      </Abas.Navigator>
    </NavigationContainer>
  )
}
