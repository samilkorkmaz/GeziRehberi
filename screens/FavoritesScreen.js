// src/screens/FavoritesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const favorites = [
  { id: '1', name: 'Eiffel Tower' },
  { id: '2', name: 'Louvre Museum' },
  { id: '3', name: 'Colosseum' },
];

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>⭐ {item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  itemText: {
    fontSize: 18,
  },
});
