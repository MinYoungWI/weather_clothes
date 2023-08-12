import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./Weather";
import * as Location from "expo-location";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Loading...");
  const [isLoaded, setIsLoaded] = useState(false);
  const API_KEY = `6d1e0b7aed7e7072634b2a5a9ef5d6dc`;

  const userLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setIsLoaded(false);
      } else if (status === "granted") {
        setIsLoaded(true);
        let {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({ accuracy: 5 });
        const location = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });
        setCity(location[0].city);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
        const json = await response.json();
        setWeather({
          temperature: json.main.temp,
          name: json.weather[0].main,
          humidity: json.main.humidity,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userLocation();
  }, []);
  return (
    <LinearGradient colors={["#9D50BB", "#6E48AA"]} style={styles.container}>
      <StatusBar hidden={true}></StatusBar>
      {isLoaded ? (
        <Weather
          city={city}
          temp={weather ? Math.floor(weather.temperature - 273.15) : null}
          weatherName={weather ? weather.name : null}
          humidity={weather ? weather.humidity : null}
        ></Weather>
      ) : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>오늘의 옷차림 알아보기</Text>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  loading: {
    flex: 1,
    paddingLeft: 25,
    justifyContent: "flex-end",
  },

  loadingText: {
    fontSize: 35,
    marginBottom: 50,
    color: "lightgray",
  },
});
