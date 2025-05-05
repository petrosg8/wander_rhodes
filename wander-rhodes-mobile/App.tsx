import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './src/navigation/tabs';
import { FavouritesProvider } from './src/context/FavouritesContext';
import SpotScreen from './src/screens/SpotScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavouritesProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Spot" component={SpotScreen} options={{ title: 'Spot Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavouritesProvider>
  );
}
