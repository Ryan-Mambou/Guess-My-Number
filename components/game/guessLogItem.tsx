import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface GuessLogItemProps {
  guess: number;
  opponentGuess: number;
}

export default function guessLogItem({
  guess,
  opponentGuess,
}: GuessLogItemProps) {
  return (
    <View style={styles.container}>
      <Text>#{guess}</Text>
      <Text>Opponent's Guess: {opponentGuess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.accent500,
    borderWidth: 1,
    borderColor: "black",
    padding: 14,
    marginHorizontal: 16,
    borderRadius: 50,
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
  }
});
