import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import SpotCard from '../components/SpotCard';
import spots from '../data/spots';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={spots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SpotCard
            spot={item}
            onPress={() => navigation.navigate('Spot', { id: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
}
