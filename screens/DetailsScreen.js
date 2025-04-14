import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
    const { mekan } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.baslik}>{mekan.isim}</Text>
            <Text>Şehir: {mekan.sehir}</Text>
            <Button title="Favorilere Ekle" onPress={() => alert('Favorilere eklendi!')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    baslik: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});

export default DetailsScreen;
