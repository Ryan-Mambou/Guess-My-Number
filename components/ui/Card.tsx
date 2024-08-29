import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";
import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    alignItems: "center",
    marginVertical: 32,
    marginHorizontal: "auto",
    borderRadius: 8,
    justifyContent: "center",
    gap: 10,
    width: "90%",
    backgroundColor: Colors.primary800,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
