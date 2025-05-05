import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import type { Spot } from '../data/spots';
import { useNavigation } from '@react-navigation/native';

type Props = { spot: Spot };

export default function SpotCard({ spot }: Props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Spot', { spot })}
      style={{
        margin: 8,
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{spot.name}</Text>
      <Text style={{ marginTop: 4, color: '#555' }}>{spot.description}</Text>
    </TouchableOpacity>
  );
}
