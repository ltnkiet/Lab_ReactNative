import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Render() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 flex-col items-center justify-center">
      <Text className="text-3xl">Bài tập React Native</Text>
      <View className="text-base my-4">
        <Text onPress={() => navigation.navigate("BMI")}>BMI Calculator</Text>
        <Text onPress={() => navigation.navigate("ListScreen")}>Movies</Text>
      </View>
    </View>
  );
}
