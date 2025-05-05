import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import FavouritesScreen from '../screens/FavouritesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'help';
          if (route.name === 'Explore') iconName = focused ? 'compass' : 'compass-outline';
          if (route.name === 'Map') iconName = focused ? 'map' : 'map-outline';
          if (route.name === 'Favourites') iconName = focused ? 'heart' : 'heart-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Explore" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Favourites" component={FavouritesScreen} />
    </Tab.Navigator>
  );
}
