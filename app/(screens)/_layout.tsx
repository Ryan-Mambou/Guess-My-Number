import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
    // screenOptions={{
    //   headerStyle: {
    //     backgroundColor: "#f4511e",
    //   },
    //   headerTintColor: "#fff",
    //   headerTitleStyle: {
    //     fontWeight: "bold",
    //   },
    // }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="startGame" options={{ headerShown: false }} />
      <Stack.Screen name="gameScreen" options={{ headerShown: false }} />
      <Stack.Screen name="gameOver" options={{ headerShown: false }} />
    </Stack>
  );
}
