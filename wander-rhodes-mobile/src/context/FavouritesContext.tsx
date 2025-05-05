import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type FavouritesContextType = {
  favourites: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
};

export const FavouritesContext = createContext<FavouritesContextType>({
  favourites: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

export const FavouritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favourites, setFavourites] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem('favourites').then(value => {
      if (value) setFavourites(JSON.parse(value));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = (id: string) => {
    setFavourites(prev => [...prev, id]);
  };
  const removeFavourite = (id: string) => {
    setFavourites(prev => prev.filter(fav => fav !== id));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
