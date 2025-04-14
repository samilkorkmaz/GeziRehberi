import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 41.0082, // İstanbul
                    longitude: 28.9784,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            >
                <Marker
                    coordinate={{ latitude: 41.0082, longitude: 28.9784 }}
                    title="Ayasofya"
                    description="Tarihi Ayasofya Camii"
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    map: { width: "100%", height: "100%" },
});

export default MapScreen;
