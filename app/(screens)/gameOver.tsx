import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function GameOver() {
  return (
    <View>
      <Text>GameOver</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    color: "white",
  },
});
