import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Weather() {
  return (
    <LinearGradient colors={["#00C6FB", "#005BEA"]} style={styles.container}>
      <View style={styles.upper}>
        <Ionicons
          style={styles.icons}
          color={"white"}
          size={144}
          name="ios-rainy"
        ></Ionicons>
        <Text style={styles.city}>서울시</Text>
        <Text style={styles.temp}>24°</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>비가 오네요</Text>
        <Text style={styles.subtitle}>우산을 챙기세요!</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  icons: {
    marginTop: 120,
  },

  city: {
    fontSize: 58,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 20,
  },

  temp: {
    fontSize: 68,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10,
  },

  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 25,
  },

  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300",
  },

  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
  },
});
