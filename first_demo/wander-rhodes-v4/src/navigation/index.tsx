import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './tabs';
import SpotScreen from '../screens/SpotScreen';

export type RootStackParamList = {
  Main: undefined;
  Spot: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Spot"
          component={SpotScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
