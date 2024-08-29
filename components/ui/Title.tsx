import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 16,
    marginHorizontal: "auto",
    padding: 16,
    borderWidth: 2,
    borderColor: "white",
    color: "white",
  },
  text: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontFamily: "open-sans",
  },
});
