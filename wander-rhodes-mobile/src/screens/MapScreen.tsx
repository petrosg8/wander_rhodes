// src/screens/MapScreen.tsx

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  StyleSheet
} from 'react-native';
import spots from '../data/spots';

export default function MapScreen() {
  if (Platform.OS === 'web') {
    // Web fallback: simple list
    return (
      <ScrollView contentContainerStyle={styles.listContainer}>
        {spots.map((spot) => (
          <View key={spot.id} style={styles.listItem}>
            <Text style={styles.title}>{spot.name}</Text>
            <Text>{spot.description}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }

  // Native: dynamic require so web bundler ignores these imports
  const {
    default: MapView,
    Marker
  }: {
    default: typeof import('react-native-maps').default;
    Marker: typeof import('react-native-maps').Marker;
  } = require('react-native-maps');

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: spots[0].latitude,
          longitude: spots[0].longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {spots.map((spot) => (
          <Marker
            key={spot.id}
            coordinate={{ latitude: spot.latitude, longitude: spot.longitude }}
            title={spot.name}
            description={spot.description}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: { flex: 1 },
  listContainer: { padding: 16, backgroundColor: '#f0f0f0' },
  listItem: {
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: '600' },
});
