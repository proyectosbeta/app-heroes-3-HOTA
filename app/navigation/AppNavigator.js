import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from 'screens/Home/Index';
import CreatureScreen from 'screens/Creature/Index';
import CreatureCastleScreen from 'screens/Creature/Castle';
import SpellScreen from 'screens/Spell/Index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010'
          },
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false
        }}
      >
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home'
            }}
        />
        <Stack.Screen
            name="Creature"
            component={CreatureScreen}
            options={{
              title: 'Creature'
            }}
        />
        <Stack.Screen
            name="Castle"
            component={CreatureCastleScreen}
        />
        <Stack.Screen
            name="Spell"
            component={SpellScreen}
            options={{ title: 'Spell' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}