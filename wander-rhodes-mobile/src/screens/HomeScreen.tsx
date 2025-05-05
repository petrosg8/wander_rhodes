import React from 'react';
import { ScrollView } from 'react-native';
import spots from '../data/spots';
import SpotCard from '../components/SpotCard';

export default function HomeScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#f0f0f0' }}>
      {spots.map(spot => (
        <SpotCard key={spot.id} spot={spot} />
      ))}
    </ScrollView>
  );
}
