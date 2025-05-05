import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Spot } from '../data/spots';

interface Props {
  spot: Spot;
  onPress: () => void;
}

export default function SpotCard({ spot, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: spot.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{spot.name}</Text>
        <Text style={styles.short}>{spot.shortDescription}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  image: { width: '100%', height: 160 },
  textContainer: { padding: 12 },
  name: { fontSize: 18, fontWeight: '600' },
  short: { fontSize: 14, color: '#555', marginTop: 4 },
});
