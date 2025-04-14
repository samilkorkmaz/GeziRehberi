import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import MapScreen from "../screens/MapScreen"; // 📌 Harita ekranını içe aktar

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Ana Sayfa" }} />
                <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Detaylar" }} />
                <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: "Favorilerim" }} />
                <Stack.Screen name="Map" component={MapScreen} options={{ title: "Harita" }} /> {/* 📌 Harita ekranını ekledik */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
