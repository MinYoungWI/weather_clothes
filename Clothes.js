import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

export default function clothesByTemp({ temp }) {
  let clothesOptions = [
    {
      condition: 27 <= temp,
      clothes: ["반바지", "민소매"],
    },
    {
      condition: 23 <= temp || temp <= 26,
      clothes: ["반소매", "린넨 셔츠", "얇은 긴팔", "면바지"],
    },
    {
      condition: 20 <= temp || temp <= 22,
      clothes: ["긴소매", "셔츠", "후드티", "면바지", "슬랙스"],
    },
    {
      condition: 17 <= temp || temp <= 19,
      clothes: [
        "니트/맨투맨",
        "바람막이",
        "가디건",
        "후드티/후드집업",
        "청바지",
        "슬랙스",
      ],
    },
    {
      condition: 12 <= temp || temp <= 16,
      clothes: ["기모후드티", "자켓", "가디건", "간절기 야상", "스타킹"],
    },
    {
      condition: 10 <= temp || temp <= 11,
      clothes: ["트렌치코트", "간절기 야상", "여러겹 껴입기"],
    },
    {
      condition: 6 <= temp || temp <= 9,
      clothes: ["코트", "가죽자켓", "야구점퍼", "플리스"],
    },
    {
      condition: temp <= 5,
      clothes: [
        "패딩",
        "기모상하의",
        "기모스타킹",
        "발열내의",
        "목도리",
        "장갑",
      ],
    },
  ];
  const recommendedClothes = clothesOptions.find((option) => option.condition);
  return (
    <View>
      <Text style={styles.clothes}>
        {recommendedClothes.clothes.join("\n")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  clothes: {
    fontSize: 33,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 54,
  },
});
