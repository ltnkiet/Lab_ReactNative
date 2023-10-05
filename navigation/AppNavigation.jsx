import React from "react";
import { BMICalculator, Render, ListScreen, DetailScreen } from "../screens";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Render" component={Render} />
        <Stack.Screen name="BMI" component={BMICalculator} />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{ title: "Movies Explores" }}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
