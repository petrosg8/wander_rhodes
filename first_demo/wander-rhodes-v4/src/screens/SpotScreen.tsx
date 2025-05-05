import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import spots, { Spot } from '../data/spots';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from '../navigation';

type SpotRouteProp = RouteProp<RootStackParamList, 'Spot'>;

const STORAGE_KEY = '@favSpots';

export default function SpotScreen() {
  const route = useRoute<SpotRouteProp>();
  const [spot, setSpot] = useState<Spot | undefined>(() => spots.find((s) => s.id === route.params.id));
  const [isFav, setIsFav] = useState<boolean>(false);

  useLayoutEffect(() => {
    (async () => {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      if (!json) return;
      const ids: string[] = JSON.parse(json);
      setIsFav(ids.includes(route.params.id));
    })();
  }, [route.params.id]);

  const toggleFav = async () => {
    try {
      const json = (await AsyncStorage.getItem(STORAGE_KEY)) || '[]';
      const ids: string[] = JSON.parse(json);
      let newIds = ids;
      if (isFav) {
        newIds = ids.filter((i) => i !== route.params.id);
      } else {
        newIds = [...ids, route.params.id];
      }
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newIds));
      setIsFav(!isFav);
    } catch (e) {
      Alert.alert('Error', 'Failed to update favourites.');
    }
  };

  if (!spot) return null;

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image source={{ uri: spot.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={styles.title}>{spot.name}</Text>
          <TouchableOpacity onPress={toggleFav}>
            <Ionicons name={isFav ? 'heart' : 'heart-outline'} size={28} color="tomato" />
          </TouchableOpacity>
        </View>
        <Text style={styles.desc}>{spot.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 250 },
  content: { padding: 16 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
  desc: { fontSize: 16, lineHeight: 22 },
});
