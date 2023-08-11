import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./Weather";
import * as Location from "expo-location";

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [isLoaded, setIsLoaded] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = `6d1e0b7aed7e7072634b2a5a9ef5d6dc`;

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setIsLoaded(false);
    } else if (status === "granted") {
      setIsLoaded(true);
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      const location = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        { useGoogleMaps: false }
      );
      setCity(location[0].city);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      const json = await response.json();
      console.log(json);
    }
  };

  useEffect(() => {
    userLocation();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      {isLoaded ? (
        <Weather>
          <Text>{city}</Text>
        </Weather>
      ) : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>오늘의 옷차림 알아보기</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  loading: {
    flex: 1,
    backgroundColor: "#373f51",
    paddingLeft: 25,
    justifyContent: "flex-end",
  },

  loadingText: {
    fontSize: 35,
    marginBottom: 50,
    color: "lightgray",
  },
});
