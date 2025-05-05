import React, { useEffect, useState } from 'react';
import { View, FlatList, SafeAreaView, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import spots, { Spot } from '../data/spots';
import SpotCard from '../components/SpotCard';

const STORAGE_KEY = '@favSpots';

export default function FavouritesScreen() {
  const [favourites, setFavourites] = useState<Spot[]>([]);

  const loadFavourites = async () => {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (!json) return;
    try {
      const ids: string[] = JSON.parse(json);
      setFavourites(spots.filter((s) => ids.includes(s.id)));
    } catch {}
  };

  useEffect(() => {
    loadFavourites();
    const focus = loadFavourites;
    return () => { focus(); };
  }, []);

  if (favourites.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No favourites yet.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={favourites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SpotCard spot={item} onPress={() => {}} />}
      />
    </SafeAreaView>
  );
}
