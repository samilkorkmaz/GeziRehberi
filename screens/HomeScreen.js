import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const mekanlar = [
    { id: '1', isim: 'Ayasofya', sehir: 'İstanbul' },
    { id: '2', isim: 'Pamukkale', sehir: 'Denizli' },
    { id: '3', isim: 'Kapadokya', sehir: 'Nevşehir' }
];

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.baslik}>Gezilecek Yerler</Text>
            <FlatList
                data={mekanlar}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.kart}
                        onPress={() => navigation.navigate('Details', { mekan: item })}
                    >
                        <Text style={styles.mekanIsmi}>{item.isim}</Text>
                        <Text>{item.sehir}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    baslik: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    kart: { padding: 15, backgroundColor: '#f1f1f1', marginBottom: 10, borderRadius: 8 },
    mekanIsmi: { fontSize: 18, fontWeight: 'bold' }
});

export default HomeScreen;
