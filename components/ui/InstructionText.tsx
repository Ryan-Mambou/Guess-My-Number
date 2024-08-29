import { Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

interface InstructionTextProps {
  text: string;
  style?: { [key: string]: any };
}

export default function InstructionText({ text, style }: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans-bold",
  },
});
