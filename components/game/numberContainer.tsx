import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

interface NumberContainerProps {
  currentGuess: number | null;
}

export default function NumberContainer({
  currentGuess,
}: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{currentGuess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    marginHorizontal: 48,
    marginVertical: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
