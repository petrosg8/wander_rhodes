import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FavouritesContext } from '../context/FavouritesContext';
import spots from '../data/spots';
import SpotCard from '../components/SpotCard';

export default function FavouritesScreen() {
  const { favourites } = useContext(FavouritesContext);
  const favouriteSpots = spots.filter(spot => favourites.includes(spot.id));

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      {favouriteSpots.length > 0 ? (
        <ScrollView>
          {favouriteSpots.map(spot => (
            <SpotCard key={spot.id} spot={spot} />
          ))}
        </ScrollView>
      ) : (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No favourites yet.</Text>
        </View>
      )}
    </View>
  );
}
