import React, { useContext } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FavouritesContext } from '../context/FavouritesContext';
import type { Spot } from '../data/spots';

type RootStackParamList = {
  Spot: { spot: Spot };
};

type SpotRouteProp = RouteProp<RootStackParamList, 'Spot'>;

export default function SpotScreen() {
  const route = useRoute<SpotRouteProp>();
  const { spot } = route.params;
  const { favourites, addFavourite, removeFavourite } = useContext(FavouritesContext);
  const isFav = favourites.includes(spot.id);

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{spot.name}</Text>
      <Text style={{ marginVertical: 12 }}>{spot.description}</Text>
      <Button
        title={isFav ? 'Remove from Favourites' : 'Add to Favourites'}
        onPress={() => (isFav ? removeFavourite(spot.id) : addFavourite(spot.id))}
      />
    </ScrollView>
  );
}
