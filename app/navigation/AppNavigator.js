import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from 'screens/Home/Index';
import CreatureScreen from 'screens/Creature/Index';
import SpellScreen from 'screens/Spell/Index';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Creature" component={CreatureScreen} />
        <Drawer.Screen name="Spell" component={SpellScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}