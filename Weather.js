import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import Clothes from "./Clothes";

const weatherCase = {
  Rain: {
    colors: ["#56CCF2", "#2F80ED"],
    title: "비가 오네요",
    subtitle: "우산을 챙기세요!",
    icon: "ios-rainy",
  },
  Clear: {
    colors: ["#F2C94C", "#F2994A"],
    title: "날씨가 맑아요",
    subtitle: "자외선 차단제 잊지 마세요!",
    icon: "ios-sunny",
  },
  Clouds: {
    colors: ["#bdc3c7", "#2c3e50"],
    title: "구름이 많고 날씨가 흐려요",
    subtitle: "좋아하는 음악 감상을 하거나 독서를 하는 것도 좋겠네요!",
    icon: "ios-cloudy",
  },

  Thunderstorm: {
    colors: ["#3C3B3F", "#605C3C"],
    title: "천둥번개가 칩니다",
    subtitle: "가급적 외출을 삼가세요!",
    icon: "ios-thunderstorm",
  },

  Snow: {
    colors: ["#B993D6", "#8CA6DB"],
    title: "눈이 오네요",
    subtitle: "눈길 조심하세요!",
    icon: "ios-snow",
  },

  Drizzle: {
    colors: ["#b6fbff", "#83a4d4"],
    title: "이슬비가 내려요",
    subtitle: "우산을 쓰고 하는 산책도 꽤 낭만적일거예요!",
    icon: "ios-rainy-outline",
  },
};

export default function Weather({ city, temp, weatherName, humidity }) {
  return (
    <LinearGradient
      colors={weatherCase[weatherName]?.colors || []}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons
          style={styles.icons}
          color={"white"}
          size={120}
          name={weatherCase[weatherName]?.icon || "ios-alert"}
        ></Ionicons>
        <View style={styles.rayout}>
          <Text style={styles.temp}>{temp}°</Text>
          <View style={styles.addInfo}>
            <Text style={styles.city}>{city}</Text>
            <Text style={styles.humidity}>💧{humidity}%</Text>
          </View>
        </View>
      </View>
      <View style={styles.lower}>
        <Clothes temp={temp}></Clothes>
        <Text style={styles.title}>
          {weatherCase[weatherName]?.title || ""}
        </Text>
        <Text style={styles.subtitle}>
          {weatherCase[weatherName]?.subtitle || ""}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rayout: {
    flexDirection: "row",
    marginTop: 10,
  },

  addInfo: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    marginLeft: 10,
  },

  city: {
    fontSize: 30,
    backgroundColor: "transparent",
    color: "white",
  },

  temp: {
    fontSize: 110,
    backgroundColor: "transparent",
    color: "white",
    marginLeft: 20,
  },

  humidity: {
    fontSize: 30,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10,
  },

  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 30,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 22,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24,
  },
});
